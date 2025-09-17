import Button from "./Button"
import styles from "./App.module.css"
import {useState, useEffect} from "react"; 

function App() {

  const [counter, setValue] = useState(0); 
  const onClick = () => setValue((prev) => prev + 1);

  // this run whenever something is changed
  console.log("run all the times"); 

  // protect code to be run once
  useEffect(() => {
    console.log("run ony once")
  }, []); 

  return (
    <>
      <h1 className={styles.title}>
        {counter}
      </h1>
      <button onClick={onClick}>
        click me
      </button>

      <hr/>

      <Button text={"haha"}/>
    </>
  )
}

export default App
