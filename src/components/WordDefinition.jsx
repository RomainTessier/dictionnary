import React, {useContext} from 'react';
import { SearchContext } from '../contexts/SearchContext';
import Loading from './Loading';
import Word from '../views/Word';

export default function WordDefinition () {

    const {wordData} = useContext(SearchContext);
    
    if (typeof wordData === 'string' && wordData !== '') {
        
        return (
            <div>
                <Loading/>
            </div>
        )
    } else if (wordData[0] !== undefined) {
        return (
            <>
                <Word wordData={wordData}/>
            </>
        )
    } else if (wordData === '') {
        return (
            <>
            </>
        )
    } else {
        return (
            <div>
                <h1>Error</h1>
            </div>
        )
    }
    
}