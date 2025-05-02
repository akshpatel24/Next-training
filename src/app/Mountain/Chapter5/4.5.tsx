"use client"
import { Custom } from "./5.1custom";
function Usestatepractice(){
//  The stirng here is going to specify the type.
const[titleProps,resetTitle]=Custom({sound:"",color:""})
// const [data, setdata] = useState<{ sound: string; color: any }>({
//     sound: "",
//     color: "#000000",    
// });
const submit = (e: any) => {
    e.preventDefault(); //this will help prevent new page load.
    console.log(titleProps)    
    console.log("Print:",titleProps.data.sound, titleProps.data.color);        
    // Clear the input fields by resetting the data state
    
    resetTitle();
    //This is going to take the value we got from
};


// function handleclick(e:any){
//     setdata({
//         ...data,
//         [e.target.name]: e.target.value
//       });     
//   }
return(
<>
<form onSubmit={submit}>
<label>Sound</label>
<input type="text" name="sound" value={titleProps.data.sound} onChange={titleProps.onchange}></input>
{/* onchange  */}
<label>Color</label>
<input type="color" name="color" value={titleProps.data.color}  onChange={titleProps.onchange}  ></input>
<button type="submit">Click this</button>
</form>
</>

)

}
export default Usestatepractice;