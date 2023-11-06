// import { useState } from "react";
// let Birthdayapp = () => {
//     let [birthName,setBirthName] = useState();
//     let [birthDOB,setBirthDOB] = useState();

//     return(
//         <div>
//             <form>
//                 <label>Enter Name:
//                     <input type="text" name ="Name" value={birthName} 
//                      onChange={(e)=>{
//                      setBirthName(e.target.value)
//                      console.log("name is typing");
//                     }}/>
//                 </label>
//                 <label>Enter DOB:
//                     <input type="date" name = "DOB" value={birthDOB} 
//                     onChange={(e) => {
//                         setBirthDOB(e.target.value)
//                         console.log("DOB is typing");
//                         }} /></label>
//                 <button type="submit" onClick={(e) => document.getElementById("bname").innerHTML={birthName}}>submit</button>
//                 <fieldset>
//                     <span>Storing Birth Details</span>
//                     <h1 id="bname">Name:</h1>
//                     <h3>DOB : {birthDOB}</h3>
//                 </fieldset>
//             </form>
//         </div>  
//     )
// };

// export default Birthdayapp;

import React, { useState } from 'react';

function Birthdayapp() {
  const [birthdays, setBirthdays] = useState([]);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  const addBirthday = () => {
    if (name && date) {
      setBirthdays([...birthdays, { name, date }]);
      setName('');
      setDate('');
    }
  };

  const deleteBirthday = (index) => {
    const updatedBirthdays = [...birthdays];
    updatedBirthdays.splice(index, 1);
    setBirthdays(updatedBirthdays);
  };

  return (
    <div>
      <h1>Birthday Record App</h1>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button onClick={addBirthday}>Add</button>
      </div>
      <ul>
        {birthdays.map((birthday, index) => (
          <li key={index}>
            {birthday.name} - {birthday.date}{' '}
            <button onClick={() => deleteBirthday(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Birthdayapp;
