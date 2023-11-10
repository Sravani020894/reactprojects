import { useState } from "react";

function Statemanagement(){
    let [count,setCount] = useState("welcome to Gigame");
    return (
        <div>
            <input type = "text" value = {count} onChange={(e) => setCount(e.target.value)}/>
            <h1>{count}</h1>
        </div>
        
    )
}


export default Statemanagement;