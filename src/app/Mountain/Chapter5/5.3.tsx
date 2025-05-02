"use client"
import { useEffect } from "react";
import { TreeContext } from "../../layout";
import { useContext } from "react";
function Arrayprint() {
 const result= useContext(TreeContext); // this will store object.


//  useEffect(() => {
//     console.log(result); // This will log the context data when the component mounts
//   }, [result]);
 return (
    <>
      {result.map((item:any, i:number) => (
         <>
         <p key={item.id}>{item.number}-{item.number}</p>
                
         <p key={i}> {item.kartwheel} -   {item.kartwheel}               </p>
         </>
      ))}
{/* if you use single () it is implicit return. with mulitple lines need fragmnet. */}
{/*  to return multiple statements or elements within a .map() or any JSX code in React, you need to wrap them in something like <React.Fragment> (or its shorthand <> </>). */}
    </>
  );
}

export default Arrayprint;


// // const trees = [
//     { id: 1 },
//     { kartwheel: 2 } // Correct syntax
//   ];
