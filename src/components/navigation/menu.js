import React from 'react';
import { bool } from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'
import '../../styles/global-styles.scss'

const Menu = ({ open, ...props }) => {
  
    const isHidden = open ? true : false;
    const tabIndex = isHidden ? 0 : -1;

    return (
        <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
            <Link to="/" tabIndex={tabIndex} onClick={isHidden === true}>
                <span aria-hidden="true"></span>
                    <h3>home</h3>
            </Link>
            <Link to="/about" tabIndex={tabIndex} onClick={isHidden === true}>
                <span aria-hidden="true"></span>
                <h3>about</h3>
            </Link>
            <a href=''><h3>fitness blog</h3></a>
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
    transition: transform 0.3s ease-in-out;
    transform: ${({ open }) => open ? 'translateX(-100%)' : 'translateX(0)'};

    a {
        font-size: 2rem;
        padding: 2rem 0;
        outline: none;
        text-decoration: none;
        transition: color 0.3s linear;


        &:hover {
            color: ${({ theme }) => theme.primaryHover};
        }
    }
`