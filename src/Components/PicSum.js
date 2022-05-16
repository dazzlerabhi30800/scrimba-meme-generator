import React from 'react';
import './PicSum.css';

function PicSum() {

    function handleClick() {
        console.log("I was clicked!")
    }

    function handleMouseOver() {
        console.log("MouseOver is called!")
    }

    return(
        <div className="container">
             <img src="https://picsum.photos/640/360" alt='' onMouseOver={handleMouseOver} />
             <button onClick={handleClick}>Click me!</button>
        </div>
    )
}

export default PicSum;