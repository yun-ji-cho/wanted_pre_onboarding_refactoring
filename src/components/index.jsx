import Toggle from './Toggle'
import Tab from './Tab'
import Login from './Login'
import Slider from './Slider'
import styles from './Components.module.scss'

// import Slider from './Slider'

// import Dropdown from './Dropdown';

function App() {
  return (
    <div className={styles.App}>
      <Toggle />
      <Tab />
      <Login />
      <Slider />
      {/* <Dropdown /> */}
    </div>
  )
}

export default App