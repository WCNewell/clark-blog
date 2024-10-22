import React from 'react'
import PropTypes from "prop-types"
import useDarkMode from 'use-dark-mode'
import { Link } from 'gatsby'
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
                <Brand>
                    <Link to="/">
                        <Logo className='logo' />
                    </Link>
                    <Name>
                        <h1 className='name'>clark newell</h1>
                    </Name>
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
                    <div className={`sticky-wrapper${isSticky ? ' sticky' : ''}`} ref={ref}>
                        <div className='sticky-inner'> 
                            <Nav />
                        </div>
                    </div>
                </Brand>
            </>
        )
    }

    return (
        <ThemeContext.Provider value={'night'}>
            <>
                <Main>
                    <Layout />
                    <Header />
                    <Content>
                        {children}
                    </Content>
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
    display: grid;
    grid-template-rows: 4rem auto;
    margin-top: 0.5rem;
    margin-right: 0.5rem;
    margin-left: 0.5rem;
    grid-row-gap: 0.5rem;
    grid-template-areas:
        "header"
        "recent posts" "latest posts"
`

const Brand = styled.div`
    grid-area: header;
    grid-template-columns: repeat(4, 1fr);
    display: grid;
    grid-column: 1 / 5;
    grid-row: 1 / 2;
`

const Name = styled.div`
    grid-column: 2 / 3;
`

const ModeIcons = styled.div`
    grid-column: 3 / 4;
    display: flex;
    align-items: flex-start;
`

const Content = styled.div`
    grid-column: 1 / 5;
    grid-row: 3;
`