import React from 'react';

function CardReveal({ content, isOpened }) {
  let setClass = isOpened ? 'card--content is-open' : 'card--content';

  return <div className={setClass}>{content}</div>;
}

export default CardReveal;