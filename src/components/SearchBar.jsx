import search from '../assets/images/icon-search.svg';
import '../style/searchbar.css';
import '../style/global.css'
import { useState, useContext } from 'react';
import { SearchContext } from '../contexts/SearchContext';

export default function SearchBar() {

    const {setWordData} = useContext(SearchContext);

    const [word, setWord] = useState('');

    const handleSearch = async () => {
        
        try {
            setWordData(word)
            let wordData = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`);
            setWord('');
            let wordJson = await wordData.json();
            setWordData(wordJson);
        } catch (error) {
            console.log(error);
            setWordData('error');
        }
        // console.log(wordJson);
        
    }

    return(
        <div className="searchbar d-flex ai-center">
            <input type="text" onChange={(e) => setWord(e.target.value)} value={word}/>
            <button onClick={() => handleSearch()}>
                <img src={search} alt="search icon" />
            </button>
            
        </div>
    )
}