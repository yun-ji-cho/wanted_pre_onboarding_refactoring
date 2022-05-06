import { useState, useRef } from 'react'
import styles from './Components.module.scss'
import { cx } from '../styles'

export default function Input(){
  const [loginValue, setLoginValue]= useState({
    email:'',
    password: ''
  });

  const [emailCheck, setEmailCheck] = useState('');
  const [passwordView, setPasswordView] = useState({
    type : 'password',
    view : false,
  });
  const inputRef = useRef(null);

  const onChangeEmail = (e) => {
    setLoginValue({
      email : e.target.value,
      password: loginValue.password,
    });

    if(validateEmail(e.target.value)) setEmailCheck('checked');
    else setEmailCheck('');
  };

  const onChangePssword = (e) => {
    setLoginValue({
      email : loginValue.email,
      password: e.target.value,
    });
  };

  const validateEmail = (email) => {
    const re = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    return re.test(email);
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
  };

  return(
    <form className={styles.input}>
      <label htmlFor="email">E-mail</label>
      <div className="inputBox email">
        <input 
          type="text" 
          id="email" 
          ref={inputRef} 
          value={loginValue.email} 
          onChange={onChangeEmail} 
          placeholder="E-mail"
        />
        <span className={`icon iconCheck ${emailCheck}`}>check</span>
      </div>

      <label htmlFor="password">Password</label>
      <div className="inputBox password">
        <input 
          id="password" 
          ref={inputRef} 
          value={loginValue.password} 
          type={passwordView.type}
          onChange={onChangePssword} 
          placeholder="Password"
        />
        <button 
          type="button" 
          className={`icon iconView ${passwordView.view ? 'view' : ''}`}
          onClick={onClickView}
        >view</button>
      </div>
    </form>
  )
};

export default Input;