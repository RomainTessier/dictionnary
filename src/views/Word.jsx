import '../style/word.css'
import Definition from '../components/Definition';
import { useState } from 'react';

export default function Word({wordData}) {
    console.log(wordData[0].phonetics[0]);
    const [playHovered, setPlayHovered] = useState(false);

    const handlePlay = () => {
        let audio = new Audio(wordData[0].phonetics[0].audio);
        audio.play();
    }

    return (
        <section>
            <div className="wordTitle d-flex ai-center">
                <div className="wordPhonetic d-flex">
                    <h1>{wordData[0].word}</h1>
                    <h2>
                    {
                        wordData[0].phonetic === undefined ? wordData[0].phonetics[wordData[0].phonetics.length-1].text : 
                        wordData[0].phonetic
                    }
                    </h2>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75" onClick={() => handlePlay()} onMouseEnter={setPlayHovered(true)} onMouseLeave={setPlayHovered(false)}>
                    <g fill={playHovered ? 'white' : '#A445ED'} fillRule="evenodd" >
                        <circle cx="37.5" cy="37.5" r="37.5" opacity=".25"/>
                        <path d="M29 27v21l21-10.5z"/>
                    </g>
                </svg>
            </div>

            {wordData[0].meanings.map((meaning, index) => {
                    return (
                        <Definition key={index} wordMeaning={wordData[0].meanings[index]} source={wordData[0].sourceUrls}/>
                    )
                }
            )}

        </section>
    )
}