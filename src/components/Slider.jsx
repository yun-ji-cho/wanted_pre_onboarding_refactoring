import { useEffect, useState, useRef } from 'react'
import styles from './Components.module.scss'
import { cx } from '../styles'

export default function Slider(){
  const [initialMousePosX, setInitialMousePosx] = useState(0)
  const [offsetX, setOffsetX] = useState(0)
  const [percentage, setPercentage] = useState(1)
  const progressBar = useRef(null)

  useEffect(() => {
    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', isMoving)
    })
  })
  const isMoving = (e) => {
    const progressBarWidth = progressBar.current.offsetWidth
    let diffX = e.clientX - initialMousePosX
    if(diffX >= progressBarWidth) diffX = progressBarWidth
    else if(diffX <= 0) diffX = 1
    
    setOffsetX(diffX)
    setPercentage(Math.ceil(offsetX / progressBarWidth * 100))
  }
  const isMouseDown = (e) => {
    setInitialMousePosx(e.clientX - offsetX)
    document.addEventListener('mousemove', isMoving) 
  }

  const onClickPercent = (e) => {

    let posX
    switch (e.currentTarget.value) {
      case '1':
        posX = 0
        break
      case '25':
        posX = 85
        break
      case '50':
        posX = 170
        break
      case '75':
        posX = 255
        break
      case '100':
        posX = 340
        break
      default :
        return
    }
    setPercentage(e.currentTarget.value)
    setOffsetX(posX)
  }

  
  return (
    <div className={styles.slider}>
      <div className={styles.percentBox}>
        <span className={styles.number}>{percentage}</span>
      </div>
      <div className={styles.inner}>
        <div className={styles.progress} ref = {progressBar}>
          <div className={styles.spotWrap}>
            <span className={cx(styles.spot1, {[styles.active]:percentage >= 1 })}/>
            <span className={cx(styles.spot25, {[styles.active]:percentage >= 25 })}/>
            <span className={cx(styles.spot50, {[styles.active]:percentage >= 50 })}/>
            <span className={cx(styles.spot75, {[styles.active]:percentage >= 75 })}/>
            <span className={cx(styles.spot100, {[styles.active]:percentage >= 100 })}/>
          </div>
          <div 
            className={styles.progressBar} 
            style={{ width: `${percentage}%`}}
          />
          <button 
            type="button"
            className={styles.controller} 
            onMouseDown={isMouseDown} 
            style={{ left: `${percentage}%`}}
          >move
          </button>
        </div>
        <div className={styles.buttonWrap}>
          <button type="button" className={styles.spot1} onClick={onClickPercent} value="1">1%</button>
          <button type="button" className={styles.spot25} onClick={onClickPercent} value="25">25%</button>
          <button type="button" className={styles.spot50} onClick={onClickPercent} value="50">50%</button>
          <button type="button" className={styles.spot75} onClick={onClickPercent} value="75">75%</button>
          <button type="button" className={styles.spot100} onClick={onClickPercent} value="100">100%</button>
        </div>
      </div>
    </div>
  )
}
