import Button from "./Button"
import styles from "./App.module.css"
import {useState} from "react"; 

function App() {

  const [counter, setValue] = useState(0); 
  const onClick = () => setValue((prev) => prev + 1);

  // we want to call api
  // only once!
  console.log("call api"); 

  return (
    <>
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>
        click me
      </button>

      <hr/>

      <Button text={"haha"}/>
    </>
  )
}

export default App
