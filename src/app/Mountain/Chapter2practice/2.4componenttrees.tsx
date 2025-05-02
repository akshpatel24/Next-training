import React from "react";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import Update from "../page";
import { createBrotliCompress } from "zlib";
import { count } from "console";
// function expression we have used spread operator to create an undefined array.
const createArray = (length:number) => [...Array(length)];
function Star({countstarsresult,Updatestar}:{countstarsresult:Boolean,Updatestar:()=>void}) {
    // This is taking the state, which is not an unassiable 
    return(
    <>
     <FaStar color={countstarsresult? "red":"gray"} onClick={Updatestar}/>
     </>
     );
    //FaStar is not a component, it is a star icon.
  }
  function StarArray({ totalstars }: { totalstars: number}) {
    const [countstars, setCountstars] = useState(0);
    function Handlecount(i:number){
    setCountstars(i+1)
    }
    return (
      <>
        <div style={{ display: "flex", gap: "4px" }}>
        {/* This creates undefined array that will print 10 stars. */}
        {createArray(totalstars).map((_, i) => (        
        <Star key={i} countstarsresult={countstars>i}     Updatestar={() => Handlecount(i)}/>   
        // This will be when index is 0 countstar will display 1 so condition is true and color
            // will change.
    ))}
        </div>
        <p>{countstars} of {totalstars}</p>
      </>

  );
  }
  console.log(createArray)
  function Starprint(){
    return(
        <>
        <StarArray totalstars={10}/>       
        </>
    )
    
 } 
// will first call stararray component. From there, we will call the starArray function. In there it will run a map of the 
//  undefined array. Then, the star component will be called. In there


export default Starprint