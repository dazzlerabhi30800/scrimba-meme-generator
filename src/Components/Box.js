import React from 'react';

function Box(props) {

    const styles = {
        border: props.on ? '1px solid black' : '2px solid purple',
    }
    return(
    <div style={styles} className='box' key={props.key}></div>
    )
}

export default Box;