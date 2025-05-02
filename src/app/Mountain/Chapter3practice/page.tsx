"use client"
import { useEffect, useReducer, useState } from "react"
import Fetchingdata from "./3.4fetch"
import Practice from "../Chapter4/4.1usereducer"
function reducer(name:Boolean){
return !name
}
function Example() {
    const [name, setName] = useReducer (reducer,true)
    const [admin, setAdmin] = useState (false)
    // function handlename(){   
    //     setName(!name)
    // }
    function handleadmin(){   
        setAdmin(!admin)
    }
    useEffect(()=>{
    const actualName = name ? "Charlie" : "Will"
    console.log(actualName)
    document.title = `Celebrate the ${actualName}`;
    },[name])

    useEffect(()=>{
    const actualadmin = admin ? "Login" : "Notlogin"
        console.log(actualadmin)
        },[admin])
        return (
        <>
            <button onClick ={setName}>Click Name</button>
            <p>Congratulations {name? "charlie":"Will"}</p>

            <button onClick ={handleadmin}>Login</button>
            {/* <p>Congratulations {name? "charlie":"Will"}</p> */}
        
            <h1> New data return from github</h1>
            <Fetchingdata/>
            <Practice/>

        </>
    )
}

export default Example;