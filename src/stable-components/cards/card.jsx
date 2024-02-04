import React from 'react';

export const Card = ({fact, index}) => {
  console.log(index)
  return (
    <div className='card'>
      <img className='img' src={index ? `https://placekitten.com/100/100?image=${index}` : `https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhdHxlbnwwfHwwfHx8MA%3D%3D`}/>
      <div className='description'>
        <h2 className='title'>{"Interesting Cat Fact #" + (Math.floor(Math.random() * 100))}</h2>
        <p className='title'>{fact}</p>
        <div className='details'>
          <p>Domestic cats, with their enigmatic personalities and quirky behaviors, have captivated human hearts for thousands of years. One of the most fascinating facts about cats is their communication capabilities. Unlike dogs, which have a modest range of vocalizations, cats can produce over 100 different sounds, including meows, purrs, hisses, and growls. Their vocal range is an essential part of how they interact with humans and other animals.</p>
          <p> Further adding to their mystique is the purr, a sound that cats make when they're content, but also while healing. Cats purr at a frequency between 25 and 150 Hertz, which is a range known to promote tissue regeneration. This purring can signify relaxation, self-healing, or even serve as a method for a mother to communicate with her kittens, who are born deaf and blind.</p>
          <p> Cats also have a specialized 'vocabulary' with their owners. Often, a cat will develop a particular set of sounds that are used exclusively with their human family, unlike the more generic sounds they make with other cats or animals. This indicates a sophisticated level of intelligence and adaptation to their environment.</p>
        </div>
      </div>
    </div>
  );
};