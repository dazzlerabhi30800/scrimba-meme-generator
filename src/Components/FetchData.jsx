import React, {useEffect, useState} from 'react';

function FetchData() {
    const [starWarsData, setStarWarsData] = useState({})
    const [count, setCount] = useState(1)

    console.log("Component rendered")

    // fetch("https://swapi.dev/api/people/1")
    //         .then(res => res.json())
    //         .then(data => console.log(data))

   useEffect(() => {
       console.log("Effect Ran!")
       fetch(`http://swapi.dev/api/people/${count}`)
            .then(res => res.json())
            .then(data => setStarWarsData(data))
   }, [count]) 

    return(
        <div>
            <h2>The count is {count}</h2>
            <button className='bg-green-500 p-1 px-6 my-2 text-white' onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
            <pre>{JSON.stringify(starWarsData,null,2)}</pre>
        </div>
    )
}

export default FetchData;

