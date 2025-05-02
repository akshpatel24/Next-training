
import { useReducer } from "react";
function dispatch(count:number){
return count+1;
}
function Practice(){
 const[count,setCount]=useReducer(dispatch,0)
return(
<>
    <h1 onClick={setCount}> {count}</h1>
</>

)

}


export default Practice;