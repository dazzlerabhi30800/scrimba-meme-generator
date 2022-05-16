import React from 'react';

function CardImg(props) {
    return (
        <img
            src={`../images/${props.isFilled}`}
            className="card--favorite"
            alt=''
            onClick={props.toggleFavorite}
        />
    )
}

export default CardImg;