import React,{useState} from 'react';

function Box(props) {


    const styles = {
        backgroundColor: props.on ? 'black' : 'red',
    }

    
    return(
    <div style={styles} onClick={() => props.handleClick(props.id)} className='box' ></div>
    )
}

export default Box;