import React from 'react'

const Footer = () => {
    return (
        <div>
            © {new Date().getFullYear()} Clark Newell, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
    ) 
}

export default Footer
