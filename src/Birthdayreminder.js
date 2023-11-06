import { useState } from "react";
function Birthdayreminder(){
    let [birthdays,setBirthdays] = useState([]);
    let [name,setName] = useState();
    let [date,setDate] = useState();
    function addBirthday(){
        if (name && date){
            setBirthdays([...birthdays,{ name, date }]);
            setDate('');
            setName('');
            console.log(birthdays);
        }
    }
    function deleteBirthday(index) 
    {
        const updatedBirthdays = [...birthdays];
        console.log("inside delete function");
        updatedBirthdays.splice(index,1);
        setBirthdays(updatedBirthdays);
    }
    return (
        <div>
            <h1>Birthday Record APP</h1>
            <div>
            <input type = "text" placeholder="name" value = {name} onChange={(e) => setName(e.target.value)} />
            <input type = "date" value = {date} onChange={(e) => setDate(e.target.value)} />
            <button onClick={addBirthday}>Add</button>
            </div>
            <ul>
                {birthdays.map((birthday,index)=>(
                    <li key={index}>
                        {birthday.name} - {birthday.date}{" "}<button onClick={deleteBirthday(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    ); 
};

export default Birthdayreminder;