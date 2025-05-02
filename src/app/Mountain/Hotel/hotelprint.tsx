"use client"; 
import Image from "next/image";
interface Lift2 {
    nameimage:string
    name: string;
    capacity: number;
}  

const imageloader=({ src }: { src: string })=> {
  return `/Images/${src}.JPEG` || `/Images/${src}.jpeg`; // Dynamically constructs the image path
} 
export default function Hotelprint(props: Lift2) {  
  return (
    <>
    <tr>
      <td>{props.name}</td>
      <td>{props.capacity}</td>
    </tr>
    <Image src={props.nameimage} width={100} height={100} loader={imageloader} alt="Hotel image"/>    
    </>
  );
}
// const loader({src}:src:string)=>{
// }