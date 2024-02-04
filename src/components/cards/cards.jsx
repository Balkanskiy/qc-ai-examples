import React, { useState, useEffect } from 'react';

const Cards = () => {
    const [catFacts, setCatFacts] = useState([]);

    useEffect(() => {
        const fetchCatFacts = async () => {
            const facts = [];
            for(let i=0; i<6; i++){
                const response = await fetch('https://catfact.ninja/fact');
                const data = await response.json();
                facts.push(data.fact);
            }
            setCatFacts(facts);
        };

        fetchCatFacts();
    }, []);

    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridGap: '15px',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            {catFacts.map((fact, index) => (
                <div style={{
                    backgroundColor: 'white',
                    borderRadius: '20px',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gridGap: '15px',
                    padding: '15px',
                }}>
                    <img src={`https://placekitten.com/100/100?image=${index}`}
                         style={{
                             width: '100px',
                             height: '100px',
                             borderRadius: '50%',
                         }}/>
                    <div style={{
                        fontSize: '11px',
                        textAlign: 'left',
                    }}>
                        <h2>Cat Fact {index + 1}</h2>
                        <p>{fact}</p>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Cards;