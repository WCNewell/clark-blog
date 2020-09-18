import React from 'react'
import PropTypes from "prop-types"
import useDarkMode from 'use-dark-mode'
import Logo from '../assets/clarklogo.inline.svg'
import Nav from './nav'
import Footer from './footer'

import StarLayout from './star-layout'
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
                <p>What goes here?</p>
                <div className={`sticky-wrapper${isSticky ? ' sticky' : ''}`} ref={ref}>
                    <div className='sticky-inner'>
                        <Logo className='logo'/>
                        <h1>clark newell</h1>
                        <h3>web development + <a
                                alt='link to Clark Newell fitness blog'
                                href=''>
                                fitness </a>journey
                        </h3>
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
                        <Nav />
                    </div>
                </div>
            </>
        )
    }

    return (
        <ThemeContext.Provider value={'night'}>
            <>
                <Layout />
                    <Header />
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

App.propTypes = {
    children: PropTypes.node.isRequired,
}