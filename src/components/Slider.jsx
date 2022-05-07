import { useEffect, useState, useRef } from 'react'
import styles from './Components.module.scss'
// import { cx } from '../styles'

const rangeArr = [1,25,50,75,100]

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
    if(e.target === e.currentTarget) return
    let posX
    switch (e.target.className) {
      case 'spot_1':
        posX = 0
        break
      case 'spot_25':
        posX = 85
        break
      case 'spot_50':
        posX = 170
        break
      case 'spot_75':
        posX = 255
        break
      case 'spot_100':
        posX = 340
        break
      default :
        return
    }
    const percent = e.target.innerText.replace('%', '')
    setPercentage(percent)
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
            {
              rangeArr.map(v => {
                return (
                  <span 
                    key={v.toString()} 
                    className={styles.spot}>
                    {v}
                  </span>
                )
              })
            }
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
        <button 
          type="button" 
          className={styles.percent} 
          onClick={onClickPercent}
        >
          {rangeArr.map(v => <span key={v.toString()} className={`styles.spot${v}`}>{`${v}%`}</span>)}
        </button>
      </div>
    </div>
  )
}
