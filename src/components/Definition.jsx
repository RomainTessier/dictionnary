import '../style/definition.css';
import link from '../assets/images/icon-new-window.svg';
import { DarkThemeContext } from '../contexts/DarkThemeContext';
import { useContext } from 'react';

export default function Definition({wordMeaning, source}) {
    const {darkTheme} = useContext(DarkThemeContext);

    const handleSynonyms = async () => {
        let wordData = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${synonyms}`);
        let wordJson = await wordData.json();
        console.log(wordJson);
    }

    return (
        <div className="definition">
            <div className="wordType d-flex ai-center">
                <h3 style={{color: darkTheme ? 'white' : '#2D2D2D'}}>{ wordMeaning.partOfSpeech }</h3>
                <div></div>
            </div>
            <div className="meaning">Meaning</div>

            <ul>
                {wordMeaning.definitions.map((def, index) => {
                        return (
                            <li key={index}>
                                {def.definition}
                            </li>
                        )
                    }
                )}
                <div className="example" style={{display : wordMeaning.definitions[0].example !== undefined ? 'flex' : 'none'}}>
                    "{wordMeaning.definitions[0].example}"
                </div>
            </ul>

            <div className="synonyms" 
            style={{display : wordMeaning.synonyms.length ? 'flex' : 'none'}}
            onClick={handleSynonyms}
            >
                    <div>Synonyms</div>
                    <p>
                        {wordMeaning.synonyms.join(', ')}
                    </p>
            </div>

            <div className="source">
                <div>Source</div>
                <a href={source[source.length-1]} className='d-flex ai-center' style={{color: darkTheme ? 'white' : '#2D2D2D', textDecoration: darkTheme ? 'underline white' : 'underline #757575'}}>
                    {source[source.length-1]}
                    <img src={link} alt="link" />
                </a>
            </div>
        </div>
    )
}