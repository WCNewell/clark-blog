import React from 'react'
import PropTypes from "prop-types"
import useDarkMode from 'use-dark-mode'
import Header from './header'
import RecentPosts from './recent-posts'
import Footer from './footer'

import StarLayout from './star-layout'
import styled from 'styled-components'
import '../styles/global-styles.scss'

import SunIcon from '../assets/sun.inline.svg'
import MoonIcon from '../assets/moon.inline.svg'

export const ThemeContext = React.createContext('day')

const App = ({ children }) => {
    const [theme, setTheme] = React.useState('night')
    const darkMode = useDarkMode(false)

  
    const toggleTheme = () => {
        theme === darkMode ? setTheme('night') : setTheme('day')
    }
  
    return (
        <ThemeContext.Provider value={'night'}>
        <>
            <Layout />
                <ModeIcons>
                    <SunIcon    className='mode-icon'
                                onClick={() => {
                                    toggleTheme()
                                    darkMode.disable()
                                }}
                                alt='sun icon for light mode'
                    />
                    <MoonIcon   className='mode-icon' 
                                onClick={() => {
                                    toggleTheme()
                                    darkMode.enable()
                                }}
                                alt='moon icon for dark star mode'
                    />
                </ModeIcons>
                <Header />
                <RecentPosts />
                    {children}
                <Footer />
        </>
        </ThemeContext.Provider>
    )
}

export default App

const Layout = () => {
    const theme = React.useContext(ThemeContext)
        return (
                theme === 'night' ? <StarLayout /> : null
        )
}

const ModeIcons = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`

App.propTypes = {
    children: PropTypes.node.isRequired,
}