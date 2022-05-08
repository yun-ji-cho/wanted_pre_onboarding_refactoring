import { useState } from 'react'
import styles from './Components.module.scss'
import { cx } from '../styles'

export default function Slider(){
  const [value, setValue] = useState(1)

  const onClickPercent = (e) => {
    setValue(e.target.value)
  }

  const onChangeValue = (e) => {
    setValue(e.target.value)
  }

  return (
    <div className={styles.slider}>
      <div className={styles.percentBox}>
        <span className={styles.number}>{value}</span>
      </div>
      <div className={styles.inner}>
        <span className={styles.progressBar} style={{width:`${value}%`}}/>
        <input type="range" id="points" name="points" min="1" max="100" value={value} onChange={onChangeValue}/>
        <div className={styles.spotWrap}>
          <span className={cx(styles.spot1, {[styles.active]:value > 1 })}/>
          <span className={cx(styles.spot25, {[styles.active]:value > 25 })}/>
          <span className={cx(styles.spot50, {[styles.active]:value > 50 })}/>
          <span className={cx(styles.spot75, {[styles.active]:value > 75 })}/>
          <span className={cx(styles.spot100, {[styles.active]:value > 100 })}/>
        </div>
      </div>
      <div className={styles.buttonWrap}>
        <button type="button" className={styles.spot1} onClick={onClickPercent} value="1">1%</button>
        <button type="button" className={styles.spot25} onClick={onClickPercent} value="25">25%</button>
        <button type="button" className={styles.spot50} onClick={onClickPercent} value="50">50%</button>
        <button type="button" className={styles.spot75} onClick={onClickPercent} value="75">75%</button>
        <button type="button" className={styles.spot100} onClick={onClickPercent} value="100">100%</button>
      </div>
    </div>
  )
}
