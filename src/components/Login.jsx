import { useState, useRef } from 'react'
import styles from './Components.module.scss'
import { CheckIcon, EyeIcon, EyeSlashIcon } from '../assets/svgs'
import { cx } from '../styles'

export default function Login (){
  const [loginValue, setLoginValue]= useState({
    email:'',
    password: ''
  })
  const [emailCheck, setEmailCheck] = useState('')
  const [passwordView, setPasswordView] = useState({
    type : 'password',
    view : false,
  })
  const inputRef = useRef(null)
  const onChangeEmail = (e) => {
    setLoginValue({
      email : e.target.value,
      password: loginValue.password,
    })

    if(validateEmail(e.target.value)) setEmailCheck('checked')
    else setEmailCheck('')
  }
  const handlePWvisible = (e) => {
    setLoginValue({
      email : loginValue.email,
      password: e.target.value,
    })
  }
  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    return re.test(email)
  }
  const onClickView = () => {
    if(passwordView.view) {
      setPasswordView({
        type : 'password',
        view : false,
      })
    }
    else setPasswordView({
      type : 'text',
      view : true,
    })
  }
  return(
    <form className={styles.login}>
      <label htmlFor="email">E-mail</label>
      <div className={cx(styles.inputBox, styles.email)}>
        <input 
          type="text" 
          id="email" 
          ref={inputRef} 
          value={loginValue.email} 
          onChange={onChangeEmail} 
          placeholder="E-mail"
        />
        <CheckIcon 
          className={cx(styles.icon, styles.iconCheck,{[styles.checked]: emailCheck})} alt='checkBtn'/>
      </div>

      <label htmlFor="password">Password</label>
      <div className={cx(styles.inputBox, styles.password)}>
        <input 
          id="password" 
          ref={inputRef} 
          value={loginValue.password} 
          type={passwordView.type}
          onChange={handlePWvisible} 
          placeholder="Password"
        />
        <button 
          type="button" 
          className={cx(styles.icon, styles.iconView, {[styles.view]: passwordView.view })}
          onClick={onClickView}
        >{(passwordView.view) ? <EyeIcon/> : <EyeSlashIcon/>}
        </button>
      </div>
    </form>
  )
}