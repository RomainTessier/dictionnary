import Logo from '../assets/images/logo.svg'
import Moon from '../assets/images/icon-moon.svg'
import '../style/header.css'
import '../style/global.css'
import { useState } from 'react'

export default function Header(){

    const [darkMode, setDarkMode] = useState(false)

    return(
        <header className='d-flex ai-center'>
            <img src={Logo} alt="logo"/>
            <div className="custom d-flex" >
                <div className="font">
                    Sans serif
                </div>
                <div className="darkmode">
                    <div className="darkmode-switch d-flex ai-center" onClick={() => setDarkMode(!darkMode)} style={{backgroundColor : darkMode ? '#A445ED' : '#757575'}}>
                        <div className={`circle ${darkMode ? 'toggled' : ''}`}></div>
                    </div>
                    <img src={Moon} alt="moon icon"/>
                </div>
            </div>
        </header>
    )
}