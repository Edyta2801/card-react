import React, { useState } from 'react';

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import CardHeader from './CardHeader';
import CardMedia from './CardMedia';
import CardExcerpt from './CardExcerpt';
import CardShowMoreButton from './CardShowMoreButton';
import CardReveal from './CardReveal';

library.add(fas);

function Card({ headline, image, excerpt, showMore }) {
    const [isOpen, setIsOpen] = useState(false);

    const reveal = () => {
        setIsOpen((prevState) => !prevState);
    }
    return (
        <div className="card">
            <CardHeader headline={headline}>
                <FontAwesomeIcon icon={["fas", "fa-ellipsis-h"]} />
            </CardHeader>
            <CardMedia image={image} />
            <CardExcerpt excerpt={excerpt} />
            <CardShowMoreButton clickHandler={reveal}>
                <FontAwesomeIcon icon={["fas", "arrow-down"]} />
            </CardShowMoreButton>
            <CardReveal content={showMore} isOpened={isOpen} />
        </div>
    )
}
export default Card;