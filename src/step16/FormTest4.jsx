import { useState } from "react";


export function Reservation(props){
  const[haveBreakfast,setHaveBreakfast] =useState(true);
  const[numberOfGuest,setnumberOfGuest] =useState(2);

  const handleSubmit =(event)=>{
    alert(`아침식사 여부: ${haveBreakfast},방문객수:${numberOfGuest}`);
    event.preventDefault();
  }

  return(
    <form onSubmit={handleSubmit}>
      <label>
        아침식사여부:
        <input type="checkbox"
      checked ={haveBreakfast}
      onChange={(event)=>{
        setHaveBreakfast(event.target.checked);
      }}/>
      </label>
      <br/>
      <label>
      방문객수: 
      <input type="number"
      checked ={numberOfGuest}
      onChange={(event)=>{
        setnumberOfGuest(event.target.value);
      }}/>
      </label>
      <button type="submit">제출</button>
    </form>
  
);
}