import React,{useState} from 'react';

function Jokes(props) {
    const [isShown, setIsShown] =  useState(false);

    function toggleShown(){
        console.log(isShown);
        setIsShown(prevShown => !prevShown);
    }
    return(
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {isShown && <p>{props.punchline}</p>}
            <button className='my-2 bg-teal-500 p-2 mb-4' onClick={toggleShown}>Toggle Punchline</button>
            <hr />
        </div>
    )
}
export default Jokes;