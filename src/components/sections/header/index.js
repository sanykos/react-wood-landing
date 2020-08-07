import React from 'react'
import NavBar from '../../navbar/Navbar'
import background from './img/Background.png'
import './header.scss'



//const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
const Header = () => {
  
    return (
    <header className="header" style={{backgroundImage: `url(${background})`}}>
        <div className="container">
            <NavBar />
        </div>
    </header>
    )
}

export default Header