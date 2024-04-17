import React, { createContext, useState } from 'react';


// Create a new context
const SearchContext = createContext();

// Create a provider component
const SearchProvider = ({ children }) => {
    const [wordData, setWordData] = useState('');
    // console.log(wordData);

    return (
        <SearchContext.Provider value={{wordData, setWordData}}>
            {children}
        </SearchContext.Provider>
    );
};

export { SearchContext, SearchProvider };