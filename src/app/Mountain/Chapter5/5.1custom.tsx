import { useState } from "react";
type CustomReturn = [
  {
    data: { sound: string; color: any };
    // data holds the object with the types as string and type.
    onchange: (e: any) => void;

  },
  () => void  //for reset function type define
];
// Here we are defining the
//sound is boom for example
//2. will call the onchange function titleproosp.onchange after matching the sound identifier inside initialvalue object. will set htat value with onchange.
//3. This will then store both values inside the initialvalue object, which will then 
//be called printed in the console by using titlesprop.value.sound and titelsporp
export function Custom(initialValue: { sound: string; color: any }):CustomReturn{
  //initial value of
  const [data, setData] = useState(initialValue);  
  function handleClick(e: any) {
    setData(data => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
  }  


  //We created a hook with intialvalue, which is really returning an object.
  return [
    {  
  

      //value is the 2 fields ins
      // This will take the current value first from the sound
      //identifier then color. Inside the updater fucntion it will then set it equal
      // to the input name that is being selecte      
      data,// this is actually meant to hold the state and use somewhere else.            
      onchange:handleClick// will store and update the new values for sound and color
    },            
        ()=>setData(initialValue) 
        //This will create a reset.
  ];
}
