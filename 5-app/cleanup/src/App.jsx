import {useState, useEffect} from "react"; 

function Hello () {

  // function byFn () {
  //   console.log("bye"); 
  // }
  // function hiFn () {
  //   console.log("created"); 
  //   return byFn; 
  // }
  // useEffect(hiFn, []); 

  useEffect(() => {
    console.log("hi"); 
    return () => {
      console.log("bye"); 
    }
  }, []); 

  return <h1> Hello </h1>
  
}

function App() {

  const [showing, setShowing] = useState(false); 
  const onClick = () => setShowing((pv) => !pv); 

  // it is not actually "hiding"
  // it is "destroying it"

  return (
    <>
      {showing ? <Hello/> : null}
      <button onClick = {onClick}>{showing ? "Hide" : "Show"}</button>
    </>
  )
}

export default App
