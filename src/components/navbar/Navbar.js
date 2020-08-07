import React from 'react'
import NavbarItem from './NavbarItem'

const NavBar = () => {

const links = [
    {text: 'Home', href: 'home'},
    {text: 'About', href: 'about'},
    {text: 'Portfolio', href: 'portfolio'},
    {text: 'Contact', href: 'contact'}
]
    return(
        <nav>
            <ul className="menu">
              {
                  
                links.map((link, i) => (
                    <NavbarItem key={i} href={link.href} text={link.text} />
                ))
              }
            </ul>
        </nav>
    )
}

export default NavBar