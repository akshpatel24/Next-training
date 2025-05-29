import { useState } from "react";

function Fruitlist() {
    const list = ['Apple', 'Pinaple', 'Mango'];
    const [store, setStore] = useState<string[]>([]);
    const handleChange = (event:any) => {
        const { value,checked } = event.target;
        // value is basically all the values
        if (checked) {
            setStore([...store,value]);
        }
        else{
            setStore(store.filter((item) => item !== value));
                //  In our current array object, whatever was checked is stored in state store.
                // But if it is unchecked or not selected then out of current array values in
                // "store", it will filter out the value that you have unchecked.
            }

    };          
    return (
        <>
           
            {list.map((list, i) => (
                <label key={i}>
                    <input
                        type="checkbox"
                        value={list}
                        //this meant for labeling.
                        onChange={handleChange}
                    />
                    {list}
                    <br />
                </label>


            ))}
            <p>Selected fruits: {store.join(',')}</p>

        </>
    );
}

export default Fruitlist;
