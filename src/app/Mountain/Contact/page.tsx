"use client"

function Contactinformation() { 
  const submitform = (formData:FormData) => {
    //  This is creating an object consisting of key and values from the html that are being returned 
    //on the UI.
    const formfields={
      email:formData.get("email"),
      message: formData.get("Message")
    }
    console.log(formfields)
  }
  return (
    <>
      <h1>Contact Us</h1>
      {/* <button onClick={submitform}></button>  */}
      <form className="space-y-4" action={submitform}>
        <div>
          <label> Email</label>
          <input id="email" type="email" name="email" required className="focus:ring-2 focus focus:ring-blue-500 focus: blue- border" ></input>
        </div>
        <div>
          <label> Message </label>
          <input id="Message" type="Message" name="Message" required className="focus:ring-2 focus focus:ring-blue-500 focus: blue- border" ></input>
        </div>
        <button type="submit" className="focus:ring-2 focus" >Submit</button>
      </form>
    </>
  );
}
export default Contactinformation;

