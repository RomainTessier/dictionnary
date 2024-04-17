import React, {useContext} from 'react';
import { SearchContext } from '../contexts/SearchContext';
import Loading from './Loading';

export default function WordDefinition () {

    const {wordData} = useContext(SearchContext);
    
    if (typeof wordData === 'string' && wordData !== '') {
        console.log(typeof wordData);
        return (
            <div>
                <Loading/>
            </div>
        )
    } else if (wordData[0] !== undefined) {
        return (
            <div>
                <h1>{wordData[0].word}</h1>
            </div>
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