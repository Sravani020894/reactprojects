import { useState } from "react";

let App = () => {
  let [count,setCount] = useState(0);
  let counter = () =>{
      setCount(++count);
      console.log(count);
  }
  let deccounter = () =>{
    setCount(--count);
  }
  return (
    <div>
      <button className="btn" onClick={counter}>Incrementcounter</button>
      <button className="btn" onClick={deccounter}>Decrementcounter</button>
      <h1>{count}</h1>
    </div>
  )
};

export default App;