import Button from "./Button"
import styles from "./App.module.css"
import {useState, useEffect} from "react"; 

function App() {

  const [counter, setValue] = useState(0); 
  const onClick = () => setValue((prev) => prev + 1);

  const [keyword, setKeyword] = useState(""); 
  const onChange = (event) => {
    setKeyword(event.target.value); 
  }


  // run all the time
  console.log("run all the times"); 

  // run once 
  // (because [] is empty)
  useEffect(() => {
    console.log("run ony once")
  }, []); 

  // run when keyword or start
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5){
      console.log("Keyword Change Detected", keyword); 
    }
  }, [keyword]); 
  
  useEffect(()=>{
    console.log("Counter Change"); 
  }, [counter]); 

  useEffect(()=>{
    console.log("Counter or Keyword Change"); 
  }, [counter, keyword]); 

  return (
    <>
      <input 
        type="text" 
        onChange={onChange}
        placeholder="Search Here..."/>

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
