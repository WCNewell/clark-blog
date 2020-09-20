import React from 'react';
import { bool } from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'
import '../../styles/global-styles.scss'

import Mail from '../../assets/mail.inline.svg'
import LinkedIn from '../../assets/linkedin.inline.svg'
import Github from '../../assets/github.inline.svg'
import Twitter from '../../assets/twitter.inline.svg'
import Instagram from '../../assets/instagram.inline.svg'

const Menu = ({ open, ...props }) => {
  
    const isHidden = open ? true : false;
    const tabIndex = isHidden ? 0 : -1;

    return (
        <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
            <a href=''><h3>fitness blog</h3></a>
            <Link className='menu-item' to="/" tabIndex={tabIndex} onClick={isHidden === true}>
                <span aria-hidden="true"></span>
                    <h3>home</h3>
            </Link>
            <Link className='menu-item' to="/about" tabIndex={tabIndex} onClick={isHidden === true}>
                <span aria-hidden="true"></span>
                <h3>about</h3>
            </Link>
            <Link className='menu-item' to="/portfolio" tabIndex={tabIndex} onClick={isHidden === true}>
                <span aria-hidden="true"></span>
                <h3>portfolio</h3>
            </Link>
            <a href='mailto: clark@clarknewell.tech'>
                <Mail className='social-icon 'alt='email icon'/>
            </a>
            <a href='https://linkedin.com/in/william-clark-newell/'>
                <LinkedIn className='social-icon' alt='linkedin icon'/>
            </a>
            <a href='https://github.com/WCNewell'>
                <Github className='social-icon' alt='github icon'/>
            </a>
            <a href='https://twitter.com/WCNewell'>
                <Twitter className='social-icon' alt='twitter icon'/>
            </a>
            <a href='https://instagram.com/willcnewell/'>
                <Instagram className='social-icon' alt='instagram icon'/>
            </a>
        </StyledMenu>
    )
}

Menu.propTypes = {
    open: bool.isRequired,
}

export default Menu

export const StyledMenu = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    text-align: left;
    padding: 2rem;
    position: absolute;
    top: 0;
    right: -275px;
    background-color: #effffa;
    color:  #0b0111;
    transition: transform 0.3s ease-in-out;
    transform: ${({ open }) => open ? 'translateX(-100%)' : 'translateX(0)'};

    a {
        font-size: 2rem;
        padding: 2rem 0;
        outline: none;
        text-decoration: none;
        transition: color 0.3s linear;
    }
`