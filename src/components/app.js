import React from 'react'
import PropTypes from "prop-types"
import useDarkMode from 'use-dark-mode'
import Logo from '../assets/clarklogo.inline.svg'
import Nav from './nav'
import Footer from './footer'

import StarLayout from './star-layout'
import styled from 'styled-components'
import '../styles/global-styles.scss'

import SunIcon from '../assets/sun.inline.svg'
import MoonIcon from '../assets/moon.inline.svg'

export const ThemeContext = React.createContext('day')

const Layout = () => {
    const theme = React.useContext(ThemeContext)
        return (
                theme === 'night' ? <StarLayout /> : null
        )
}

const App = ({ children }) => {
    const [theme, setTheme] = React.useState('night')
    const darkMode = useDarkMode(false)
  
    const toggleTheme = () => {
        theme === darkMode ? setTheme('night') : setTheme('day')
    }
  
    const Header = () => {
        const [isSticky, setSticky] = React.useState(false)
        const ref = React.useRef(null)
        const handleScroll = () => {
            if (ref.current) {
                setSticky(ref.current.getBoundingClientRect().top <= 0)
            }
        }

        React.useEffect(() => {
            window.addEventListener('scroll', handleScroll)

            return () => {
                window.removeEventListener('scroll', () => handleScroll)
            }
        }, [])

        return (
            <>
                <div className={`sticky-wrapper${isSticky ? ' sticky' : ''}`} ref={ref}>
                    <div className='sticky-inner'>
                        
                        <Nav />
                    </div>
                </div>
                <div className='logo-name'>
                    <Logo className='logo' />
                    <h1>clark newell</h1>    
                </div>
                <div className='mode-icons'>    
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
                    <h3>web development + <a className='sub-title'
                            alt='link to Clark Newell fitness blog'
                            href=''>
                            fitness </a>journey
                    </h3>
                </div>
            </>
        )
    }

    return (
        <ThemeContext.Provider value={'night'}>
            <>
                <Main>
                <Layout />
                    <Header />
                        {children}
                </Main>
                <Footer />
                
            </>
        </ThemeContext.Provider>
    )
}

export default App

App.propTypes = {
    children: PropTypes.node.isRequired,
}

const Main = styled.div`
    margin-left: 1rem;
    margin-right: 1rem;
`