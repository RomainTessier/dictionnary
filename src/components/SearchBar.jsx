import search from '../assets/images/icon-search.svg';
import '../style/searchbar.css';
import '../style/global.css'
import { useState, useContext } from 'react';
import { SearchContext } from '../contexts/SearchContext';
import { DarkThemeContext } from '../contexts/DarkThemeContext';

export default function SearchBar() {

    const {setWordData} = useContext(SearchContext);
    const {darkTheme} = useContext(DarkThemeContext);

    const [word, setWord] = useState('');

    const handleSearch = async () => {

        if (word === '') {
            return;
        } else {
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
        }
    }

    return(
        <div className="searchbar d-flex ai-center"
            style={{backgroundColor: darkTheme ? '#1E1E1E' : '#F4F4F4'}}
        >
            <input type="text" onChange={(e) => setWord(e.target.value)} value={word} style={{backgroundColor: darkTheme ? '#1E1E1E' : '#F4F4F4', color: darkTheme ? 'white' : 'black'}}/>
            <button onClick={() => handleSearch()} style={{backgroundColor: darkTheme ? '#1E1E1E' : '#F4F4F4'}}>
                <img src={search} alt="search icon" />
            </button>
            
        </div>
    )
}