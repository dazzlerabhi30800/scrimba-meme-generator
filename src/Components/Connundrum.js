import React, {useState} from 'react';

function Connundrum() {
    const [thingsArray, setThingsArray] = useState([
        "Things 1",
        " Things 2"
    ])

    // const thingsArray = ['Thing 1', 'Thing 2'];

   function addItem() {
    setThingsArray(prevThingsArray => [...prevThingsArray, `Things ${prevThingsArray.length + 1}`]);
   } 

   const thingsElements = thingsArray.map((thing, index) => <p key={index}>{thing}</p>)




    return (
        <div className='flex flex-col'>
            <button className='p-2 m-2 bg-teal-500 rounded-md text-white font-bold' onClick={addItem} >Add Item</button>
            {thingsElements}
        </div>
    )
}

export default Connundrum;