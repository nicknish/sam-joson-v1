import React from 'react';

const CardList = props => {
  return <ul className="cardList">{props.children}</ul>;
};

export default CardList;
