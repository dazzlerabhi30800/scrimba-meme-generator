import React, { useEffect, useState } from 'react';
import './WindowTracker.css'

function WindowTracker() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener('resize', function() {
            setWindowWidth(window.innerWidth);
        })
    })
    return(
        <h1>Window width : {window.innerWidth}</h1>
    )
}

export default WindowTracker;