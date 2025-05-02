interface Lift {
  id: number;
  name: string;
  status: string;
}
//  used to define the type of keys in the data object inside the map function.
async function getData(){
const res=await fetch("https://snowtooth-api-rest.fly.dev");
return res.json();
}
async function Update() {
  const data=await getData();
  console.log(data)
  return (
     <>
    <h1>Lift status</h1>
   <table>
      <thead>
       <tr>
        <th>Lift ID</th>
         <th>Lift name</th>
         <th> Current Status</th>
       </tr>
      </thead>
      <tbody>
      {data.map((lift:Lift) => (
          <tr key={lift.id}>
            <td>{lift.id}    </td>
            <td>{lift.name}  </td>
            <td>{lift.status} </td>
          </tr>
        ))}
      </tbody>
   </table>
   
    {/* <div>{JSON.stringify(data)}</div> */}
     </>    
  );
  }

  export default Update;
  
   
  