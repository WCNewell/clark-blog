import React from 'react'
import styled from 'styled-components'

import Mail from '../assets/mail.inline.svg'
import LinkedIn from '../assets/linkedin.inline.svg'
import Github from '../assets/github.inline.svg'
import Twitter from '../assets/twitter.inline.svg'
import Instagram from '../assets/instagram.inline.svg'
import Mail from '../assets/mail.inline.svg'


const Footer = () => {
    return (
        <Socials>
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
        </Socials>
        <div>
            © {new Date().getFullYear()} Clark Newell, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
    ) 
}

export default Footer

const Socials = styled.div`
    display: flex;
    flex-flow: row norwap;
    justify-content: flex-start;
    align-items: center;
    width: auto;
    padding-bottom: 10px;

    img {
        width: 50px;
        height: 50px;

        &:first-of-type {
            margin-right: 10px;
        }
    }
`