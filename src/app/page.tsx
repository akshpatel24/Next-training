"use client"
import SelectProper from "./Mountain/selectdropdownpractice.tsx/page";
import SelectPropertwo from "./Mountain/selectdropdownpractice.tsx/selectdropdown2";
import { useContext } from "react";
// import TreeContext from 
import Example from "./Mountain/Chapter3practice/page";
import Arrayprint from "./Mountain/Chapter5/5.3";
function Home() {
  return (
   <>
  <h1>Hello world</h1>
  <SelectProper/>
  <br></br>
  <SelectPropertwo/>
  <Arrayprint/>
  
  {/* <Example/> */}
   </>
  );
}
export default Home;
// By default this is a server component as it is static.
