import React, { createContext, useState } from 'react';


// Create a new context
const SearchContext = createContext();

// Create a provider component
const SearchProvider = ({ children }) => {
    const [wordData, setWordData] = useState('');


    return (
        <SearchContext.Provider value={{wordData, setWordData}}>
            {children}
        </SearchContext.Provider>
    );
};

export { SearchContext, SearchProvider };