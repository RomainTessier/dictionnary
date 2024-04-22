import '../style/word.css'
import play from '../assets/images/icon-play.svg'
import Definition from '../components/Definition';

export default function Word({wordData}) {
    console.log(wordData[0].phonetics[0]);

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
                <img src={play} alt="play icon" onClick={() => handlePlay()}/>
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