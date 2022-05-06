import styles from './Components.module.scss'

export default function Toggle() {

  return (
    <div className={styles.toggle}>
      <input type="radio" id="basic" name="toggle"/>
      <label htmlFor="basic">기본</label>
      <input type="radio" id="detail" name="toggle" className={styles.right}/>
      <label htmlFor="detail">상세</label>
      <div className={styles.slideElem}/>
    </div>
  )
}
