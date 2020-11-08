import React from 'react';

function CardShowMoreButton({clickHandler, children}){
    return(
        <button onClick={clickHandler} className="card--showmore">
      {children}
    </button>
    )
}
export default CardShowMoreButton;