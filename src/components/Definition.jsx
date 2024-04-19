import '../style/definition.css';
import link from '../assets/images/icon-new-window.svg';

export default function Definition({wordMeaning, source}) {
    console.log(wordMeaning);

    console.log(source);

    return (
        <div className="definition">
            <div className="wordType d-flex ai-center">
                <h3>{ wordMeaning.partOfSpeech }</h3>
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

            <div className="synonyms" style={{display : wordMeaning.synonyms.length ? 'flex' : 'none'}}>
                    <div>Synonyms</div>
                    <p>
                        {wordMeaning.synonyms.join(', ')}
                    </p>
            </div>

            <div className="source">
                <div>Source</div>
                <a href={source} className='d-flex ai-center'>
                    {source}
                    <img src={link} alt="link" />
                </a>
            </div>
        </div>
    )
}