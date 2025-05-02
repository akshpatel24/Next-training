// import { useState } from "react";
import Hotelprint from "./hotelprint";
import Update from "../page";
interface Lift2 {
  id: string,
  name: string,
  capacity: number,
  nameimage: string
}
async function getData() {
  const response = await fetch('https://snowtooth-hotel-api.fly.dev');
   return response.json();
}
async function Hotel() 
{
  const data2 = await getData();
  // console.log(data2) 
  return (
    <>
      <h1>Hotel details</h1>
      {data2.map((object: Lift2) => (
        <Hotelprint nameimage={object.id} name={object.name} capacity={object.capacity} />
      ))}
    </>
  );
}

export default Hotel;

