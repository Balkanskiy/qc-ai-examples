import { useEffect, useState } from 'react';

export const useCards = (numberOfFacts = 6) => {
    const [catFacts, setCatFacts] = useState([]);
    
    useEffect(() => {
        const fetchCatFacts = async () => {
            const facts = [];
            for (let i=0; i < numberOfFacts; i++){
                try {
                    const response = await fetch('https://catfact.ninja/fact');
                    const data = await response.json();
                    facts.push(data?.fact);
                } catch (e) {
                    facts.push('fact');
                }

            }
            setCatFacts(facts);
        };

        fetchCatFacts();
        }, []);
    
    return [catFacts];
}