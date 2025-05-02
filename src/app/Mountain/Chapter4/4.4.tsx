"use client";
import { useState, useRef } from "react";
function Userefpractice() {
    const [print, setPrint] = useState("");
    const sound: any = useRef(null);
    const color: any = useRef(null);
    const age: any = useRef(null);

    let b=8;
    let a:any=useRef(5);
    const submit = (e: any) => {
        e.preventDefault();
        const soundval = sound.current.value;
        const colorval = color.current.value;
        
        setPrint(soundval);
        setPrint(sound)
        //A=5 so print will be 6                
        console.log("Sound:", soundval);
        sound.current.value
        console.log("Color:", colorval);
        
        // console.log(print)
    
    };
    return (
        <>    
            <form onSubmit={submit}>
            <label>Sound</label>
                <input ref={sound} id="sound1" type="text" placeholder="Enter sound" />
                <label>Color</label>
                <input ref={color} type="color" placeholder="Enter color" />
                <label>Age</label>
                <input ref={age} type="number" placeholder="Enter Number" ></input>
                <button type="submit">Submit</button>
            </form>
            <input type="text" value={print} readOnly />
        </>
    );
}

export default Userefpractice;
