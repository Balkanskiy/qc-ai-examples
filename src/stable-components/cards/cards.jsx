import React from 'react';
import { Card } from './card.jsx';
import { useCards } from './useCards';

export const Cards = (props) => {
  
  const [catFacts] = useCards(props.number || 1)
  
  return (
    <div className={'cards'}>
      {catFacts.map((fact, index) =>  (
        <Card fact={fact} index={index} key={fact.length} />
        )
      )}
    </div>
  );
};