import React, {useState, useEffect} from 'react';

const resultsStrings = [
    "We only eat dumplings here >:(",
    "How much money do you think you have :/",
    "Leave please",
    "Oh no you've been cursed! you can only eat dummplings now ;0",
];

const dumpSynonyms = [
    "dumpling",
    "gyoza",
    "potsticker",
    "pot-sticker",
    "bao",
    "trader joe's",
    "delicious",
];

function SearchResults({searchTerms}) {
    const [resultsNum, setResultsNum] = useState(0);

    useEffect(() => {
        setResultsNum((prev) => {
            if (prev < 3)
                return prev ++;
            else 
                return 0;
        });
        console.log(searchTerms);
    }, [searchTerms])

    return (
        <>
            { (searchTerms !== "" || dumpSynonyms.includes(searchTerms)) && (
                <h1> {resultsStrings[resultsNum]}</h1>
            )}
        </>
    );

}

export default SearchResults;