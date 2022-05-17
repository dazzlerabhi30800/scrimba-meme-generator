import React, {useEffect, useState} from 'react';

function FetchData() {
    const [starWarsData, setStarsWarsData] = useState({})
    const [count, setCount] = useState(0)

    console.log("Component rendered")

    // fetch("https://swapi.dev/api/people/1")
    //         .then(res => res.json())
    //         .then(data => console.log(data))

   useEffect(() => {
       console.log("Effect function run")
   }, [count]) 

    return(
        <div>
            <pre>{JSON.stringify(starWarsData,null,2)}</pre>
            <h2>The count is {count}</h2>
            <button className='bg-green-500 p-1 px-6 my-2 text-white' onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
        </div>
    )
}

export default FetchData;

