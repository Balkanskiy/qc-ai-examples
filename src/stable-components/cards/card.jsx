import React from 'react';

export const Card = ({fact, index}) => {
  return (
    <div className='card'>

      <img className='img' src={`https://placekitten.com/300/300?image=${Math.floor(Math.random() * 16)}`}/>
      <div className='description'>
        <h2 className='title'>{"Interesting Cat Fact #" + (Math.floor(Math.random() * 100))}</h2>
        <p className='title'>{fact}</p>
        <div className='details'>
          <p>Domestic cats, with their enigmatic personalities and quirky behaviors, have captivated human hearts for thousands of years. One of the most fascinating facts about cats is their communication capabilities. Unlike dogs, which have a modest range of vocalizations, cats can produce over 100 different sounds, including meows, purrs, hisses, and growls. Their vocal range is an essential part of how they interact with humans and other animals.</p>
        </div>
      </div>
    </div>
  );
};