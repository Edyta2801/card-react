import React from 'react';

function CardMedia({ image }) {
    return (
        <div className="card--media">
            <img src={image} alt="" />
        </div>
    )
}

export default CardMedia;