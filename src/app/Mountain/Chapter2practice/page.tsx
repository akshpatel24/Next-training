"use client"
import { useReducer, useState} from "react"
import Starprint from "./2.4componenttrees";
import Fruitlist from "../selectdropdownpractice.tsx/fruitcheckbox";
function reducer(check:Boolean,action: { type: string }) {
    switch(action.type){
     case 'Option1':
        return !check;      
        case 'Option2':
            return check;  
    default:
        return check;
    }
}

function Checkboxpractice(){
    const[check,setCheck]=useReducer(reducer,true)
  function Handlecheck(e:any){
    setCheck({ type: e.target.value })
}


  // function Handlecheck2(){
  //   setCheck(false)  
  // }
 
  return(
    <>
    <label>First checkbox</label>
     <input type="checkbox" value="Option1" onChange={Handlecheck}></input>
     <label>Second checkbox</label>
     <input type="checkbox"  value="Option2" onChange={Handlecheck}></input>
     {/* Here we have created a "toggle" but not in a button but instead using a check box. */}
     <p>Check is:{check?"unchecked":"checked"}</p>    
     <br></br>
    </>
    )
}  



function dispatch(status:Boolean){
 return !status

}
function PrintPackage() {
    const[status,setStatus]=useReducer(dispatch,true)
    return (
        <>
           <h1> The Package is :{status?"delievered":"not delievered"}</h1>             
            <button onClick={setStatus}>See current package</button>
            <Checkboxpractice/>
            <br></br>
            <br></br>
            <Starprint/>
            <br></br>
            <br></br>
            <Fruitlist/>    
            
        </>
    )
}

<h1>This is outside all this</h1>


export default PrintPackage;