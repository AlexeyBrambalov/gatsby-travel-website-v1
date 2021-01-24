import React, {useState, useEffect} from 'react'
import { FaTimes, FaBars} from 'react-icons/fa'
// import { FaBars} from 'react-icons/all-files/fa/FaTimes'
import {IconContext} from 'react-icons/lib'
import {Nav, NavbarContainer, NavIcon, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from './NavbarElements'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const [scroll, setScroll] = useState(false)

    const handleClick = () => setClick(!click)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScroll(true)
        }else {
            setScroll(false)
        }
    }

    useEffect(() => {
        changeNav()
        window.addEventListener("scroll", changeNav)
    }, [])

    return (
        <>
            <IconContext.Provider value={{ color:"#141414"}}>
                <Nav active={scroll} click={click}>
                    <NavbarContainer>
                        <NavLogo to="/">
                            <NavIcon/>
                            EXPLOR
                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? 
                            //<NavIcon/>
                            <FaTimes />
                             : 
                            //<NavIcon/>
                            <FaBars />
                             }
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks to="/">Home</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/Images">Images</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/destinations">Destinations</NavLinks>
                            </NavItem>
                        </NavMenu>
                    </NavbarContainer>

                </Nav>
            </IconContext.Provider>
        </>
    )

}
export default Navbar