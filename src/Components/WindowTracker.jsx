import React, { useEffect, useState } from 'react';
import './WindowTracker.css'

function WindowTracker() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        function watchWidth() {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener('resize', watchWidth)

        return function() {
            console.log("cleaning up....")
            window.removeEventListener('resize', watchWidth)
        }
}, [])
    return(
        <h1>Window width : {window.innerWidth}</h1>
    )
}

export default WindowTracker;