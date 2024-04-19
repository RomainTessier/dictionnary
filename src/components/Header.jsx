import Logo from '../assets/images/logo.svg'
import Arrow from '../assets/images/icon-arrow-down.svg'
import '../style/header.css'
import '../style/global.css'
import { useContext, useState } from 'react'
import { FontContext } from '../contexts/FontContext'
import { DarkThemeContext } from '../contexts/DarkThemeContext'

export default function Header(){

    const [menu, setMenu] = useState(false)
    const {font, setFont} = useContext(FontContext)
    const {darkTheme, setDarkTheme} = useContext(DarkThemeContext)

    return(
        <header className='d-flex ai-center'>
            <img src={Logo} alt="logo"/>
            <div className="custom d-flex" >
                <div className="font d-flex ai-center" onClick={() => setMenu(!menu)}>
                    <div className="fontName">
                        {font}
                    </div>
                    <img src={Arrow} alt="arrow icon" 
                    style={{transform : menu ? 'rotate(180deg)' : 'rotate(0deg)'}}
                    />

                    <div className={`d-flex ${menu ? 'menuActive menu' : 'menuInactive menu'}`}>
                        <div onClick={() => setFont('sans-serif')}>Sans-serif</div>
                        <div onClick={() => setFont('Serif')} >Serif</div>
                        <div onClick={() => setFont('Monospace')}>Monospace</div>
                    </div>
                </div>

                <div className="darkmode d-flex ai-center">
                    <div className="darkmode-switch" onClick={() => setDarkTheme(!darkTheme)} style={{backgroundColor : darkTheme ? '#A445ED' : '#757575'}}>
                        <div className={`circle ${darkTheme ? 'toggled' : ''}`}></div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                    <path fill="none" stroke={darkTheme ? '#A445ED' : '#838383'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"/>
                    </svg>
                </div>
            </div>
        </header>
    )
}