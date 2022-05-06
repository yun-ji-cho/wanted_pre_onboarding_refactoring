import { useState } from 'react'
import styles from './Components.module.scss'
import { cx } from '../styles'

const tabArray = ['감자', '고구마', '카레라이스'];

export default function Tab (){
  const [activeEl, setActiveEl] = useState(0);
  const [leftPos, setLeftPos] = useState(0);
  const handleActive = (e) => {
    setActiveEl(e.currentTarget.dataset.num);
    setLeftPos(e.currentTarget.dataset.num * 100 / tabArray.length);
  };
  return(
    <div className={styles.tab}>
      <div className={styles.buttonWrap}>
        {tabArray.map((v,i) => 
          <button 
            type="button" 
            className={cx({[styles.active]:Number(activeEl)===i})}
            key={v}
            data-num={i} 
            onClick={handleActive}
          >{v}</button>
        )}
        <div 
          className={styles.slideElem} 
          style={{left:`${leftPos}%`, width:`${100 / tabArray.length}%`}}
        />
      </div>
    </div>
  )
};
