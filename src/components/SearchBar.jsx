import search from '../assets/images/icon-search.svg';
import '../style/searchbar.css';
import '../style/global.css'
import { useState, useContext } from 'react';
import { SearchContext } from '../contexts/SearchContext';
import { DarkThemeContext } from '../contexts/DarkThemeContext';
import { FontContext } from '../contexts/FontContext';

export default function SearchBar() {
    const {font} = useContext(FontContext);
    const {setWordData} = useContext(SearchContext);
    const {darkTheme} = useContext(DarkThemeContext);

    const [word, setWord] = useState('');
    const [focused, setFocused] = useState(false);
    const [wordError, setWordError] = useState(false);

    const handleFocusOut = () => {
        if(focused){
            setFocused(!focused);
        } else {
            return;
        }
    }

    const handleSearch = async () => {

        if (word === '') {
            setWordError('empty')
            setWordData('');
        } else {
            try {
                let wordData = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`);
                if (!wordData.ok) {
                    throw new Error('Network response was not ok');
                }
                setWordData(word)
                setWordError(false);  
                setWord('');
                let wordJson = await wordData.json();
                setWordData(wordJson);
            } catch (error) {    
                setWordError(true);
                setWordData(error);
                setWord('');
            }
        }
    }

    return(
        <>
        <div className="searchbar d-flex ai-center"
            style={{backgroundColor: darkTheme ? '#1E1E1E' : '#F4F4F4', 
            border: wordError ? `1px solid #FF5252` : `1px solid ${darkTheme ? `${focused ? '#A445ED' : '#1E1E1E'}` : `${focused ? '#A445ED' : '#F4F4F4'}`}`}}
        >
            <input type="text" 
                onChange={(e) => setWord(e.target.value)} 
                value={word} 
                style={{backgroundColor: darkTheme ? '#1E1E1E' : '#F4F4F4', color: darkTheme ? 'white' : 'black', fontFamily : `${font}`}} 
                placeholder='Search for any word...' 
                onFocus={() => setFocused(!focused)}  
                onBlur={handleFocusOut}
            />
            <button onClick={() => handleSearch()} style={{backgroundColor: darkTheme ? '#1E1E1E' : '#F4F4F4'}}>
                <img src={search} alt="search icon" />
            </button>
            
        </div>
        <div className="error" style={{display: wordError==='empty' ? 'flex' : 'none'}}>Whoops, can't be empty</div>
        </>
    )
}