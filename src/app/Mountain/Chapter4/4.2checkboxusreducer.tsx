"use client"
import { useReducer} from "react"
// import Practice from "./4.1usereducer"

const dispatch = (check:any, action:any) => {
  switch (action) {
    case "option1":
      return !check;
    default:
      return check;
  }
};

function Practice2(){
const[check,setCheck]=useReducer(dispatch,true)
return(
<>
  <input type="checkbox" value="option1" onClick={setCheck}  ></input>
<p>{check?"unchecked":"checked"}</p>
</>

)

}
export default Practice2;