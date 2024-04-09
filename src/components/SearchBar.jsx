import search from '../assets/images/icon-search.svg';
import '../style/searchbar.css';
import '../style/global.css'

export default function SearchBar() {
    return(
        <div className="searchbar d-flex ai-center">
            <input type="text"/>
            <button>
                <img src={search} alt="search icon" />
            </button>
            
        </div>
    )
}