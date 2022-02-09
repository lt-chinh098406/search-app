import React from 'react';

import './card.styles.css';

export const Card = (props) => (
  <div>
    <h1>{props.monster.name}</h1>
  </div>
);
