"use client"
import { useReducer, useRef } from "react";
function dispatch(dialogue: string, action: { type: string }) {
    switch (action.type) {
        case 'Option1':
            return "Yes"
        case 'Option2':
            return "Sure";
        default:
            return dialogue;
    }
}
function Extension() {
    const [dialogue, setDialogue] = useReducer(dispatch, "HI");
    function handleClick2(event: any) {
        setDialogue({ type: event.target.value });
    }

    return (
        <>
            <p>Message is {dialogue}  </p>            
          
            <button value="Option1" onClick={handleClick2}>Option1 </button> 
            <button value="Option2" onClick={handleClick2}>Option2</button>


        </>
    )
}

export default Extension;