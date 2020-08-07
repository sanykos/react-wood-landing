import React, {useEffect} from 'react'
import {Link} from 'react-scroll'

const NavbarItem = ({href, text}) => {
    return(
        <li className="menu__item">
            <Link href={href}
                    activeClass="active" 
                    to={href}
                    spy={true} 
                    smooth={true} 
                    offset={50} 
                    duration={500} 
                    delay={500}
            >
                {text}
            </Link>
        </li>
    )
}

export default NavbarItem