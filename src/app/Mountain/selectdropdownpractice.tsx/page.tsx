"use client"
import { useState } from "react"

function SelectProper() {
    const [update, setUpdate] = useState("");
    const function2=(event:React.ChangeEvent<HTMLSelectElement>)=>{
      // The change event defines the type
        setUpdate(event.target.value)
    }
    return (
      <>
        <select onChange={function2} value={update}>
        <option value="Blue">Blue</option>
          <option value="Red">Red</option>
          <option value="Green">Green</option>
        </select>
        <p style={{backgroundColor: update}}> Color selected is :{update}  </p>
      </>
    )
}





export default SelectProper