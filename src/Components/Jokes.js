import React,{useState} from 'react';

function Jokes(props) {
    const [isShown, setIsShown] =  useState(false);

    const [messages, setMessages] = useState(["a"])

    // function toggleShown(){
    //     console.log(isShown);
    //     setIsShown(prevShown => !prevShown);
    // }
    return(
        <div>
            {/* {props.setup && <h3>{props.setup}</h3>} */}
            {/* {isShown && <p>{props.punchline}</p>} */}
            {/* <button onClick={toggleShown} className='my-2 bg-teal-500 p-2 mb-4'>{isShown ? "Hide" : "Show"}</button> */}
            {/* {isShown && <button className='my-2 bg-teal-500 p-2 mb-4' onClick={toggleShown}>Hide punchline</button>} */}
           {/* {!isShown && <button className='my-2 bg-teal-500 p-2 mb-4' onClick={toggleShown}>Show punchline</button>} */}
           {
               messages.length === 0 ?
               <h1>You are all caught up</h1> :
               <h1>You have {messages.length} unread {messages.length > 1 ? "messages" : "message"}</h1>
           }
            <hr />
        </div>
    )
}
export default Jokes;
