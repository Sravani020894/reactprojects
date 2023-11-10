import { useState } from "react"

function Component(){
    let [user,setUser] = useState({fName: "",lName : ""});
    let inputChange = (event)=>{
        let {value,name} = event.target;

        // setUser((preSate)=> {return {...preSate, [name]:value}})

        setUser((preSate)=> ({...preSate, [name]:value}))
    }
    return(
        <div>
            <input type="text" onChange={inputChange} name="fName"/>
            <input type="text" onChange={inputChange} name="lName"/>

            <h1>{user.fName} {user.lName}</h1>
        </div>

    )
}
export default Component