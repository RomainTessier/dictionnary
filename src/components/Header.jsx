import Logo from '../assets/images/logo.svg'
import Moon from '../assets/images/icon-moon.svg'
import Arrow from '../assets/images/icon-arrow-down.svg'
import '../style/header.css'
import '../style/global.css'
import { useContext, useState } from 'react'
import { FontContext } from '../contexts/FontContext'

export default function Header(){

    const [menu, setMenu] = useState(false)
    const [darkMode, setDarkMode] = useState(false)
    const {font, setFont} = useContext(FontContext)

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
                    <div className="darkmode-switch" onClick={() => setDarkMode(!darkMode)} style={{backgroundColor : darkMode ? '#A445ED' : '#757575'}}>
                        <div className={`circle ${darkMode ? 'toggled' : ''}`}></div>
                    </div>
                    <img src={Moon} alt="moon icon"/>
                </div>
            </div>
        </header>
    )
}