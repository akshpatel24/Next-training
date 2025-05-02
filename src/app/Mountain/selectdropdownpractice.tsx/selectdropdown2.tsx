"use client"
import { useState } from "react"
function SelectPropertwo() {
    const [update, setUpdate] = useState("Red")
    const [newarray,setNewarray]=useState([])

    const array1=[1,4,5,6,7]
    const array2=[2,3,5,8,9,11]
    const array3 = array1.concat(array2)
    console.log(array3)
    function formation(array3:any){
        // To get rid of duplicates the fastest way is to use new Set method. However a set cannot be used directly in a state. S
        //  So as a result, you need to typecast.
        console.log(uniquearray)
        setNewarray(uniquearray)
    }
    
     function dropdown(event: React.ChangeEvent<HTMLSelectElement>) {
        setUpdate(event.target.value)
    }
    function resetstatus(){
        setUpdate("Red")
    }
    return (
        <>
            <select onChange={dropdown} value={update}>
                <option value="Blue">Blue</option>
                <option value="Red">Red</option>
                <option value="Green">Green</option>
            </select>
            <h1>Following is a preview of the Selected Color.</h1>
            {/* <button onClick={}>Click Red to restS</button> */}
                        <p> Selected color is {update} <button onClick={resetstatus}style={{ backgroundColor: update, color: "Black"}}>Click this</button>  </p>
            {/* if changes gto red the need value is red because state intial state resets to red. */}
            <button onClick={()=>formation(array3)}>Show this</button>
            <p>The value is {newarray.join(',')}</p>       
        </>
    )
}
export default SelectPropertwo;
