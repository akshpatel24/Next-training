"use client"
import { useEffect, useState } from "react";
interface Lift2 {
    id: number
    login: string;
}
async function getData() {
    const response = await fetch('https://api.github.com/users');
    console.log(response);
    return response.json();
}
function Fetchingdata() {
    const [gitdata, setGitdata] = useState([])
    const [showData, setShowData] = useState(true);
     //showdata is a state that will hold
     //boolean. The notion is to store
     //

    async function fetchUsers() {        
        const data = await getData();
        setGitdata(data);

    }
    useEffect(() => {
        fetchUsers();
//will only render once.
    }, []);

    function handleclick(){      
        setShowData(!showData)
//false


        setGitdata([])//empty
         if(showData==false){
            fetchUsers();
         }
    }

    //  console.log(gitdata)
    return (
        <>
            <ul>
                {gitdata.map((lift: Lift2) => (
                    <li key={lift.id}>{lift.login} </li>
                ))}
            </ul>
            <button onClick={handleclick}> {showData?"closed":"show"}     </button>
       
        </>
    )


}


export default Fetchingdata;