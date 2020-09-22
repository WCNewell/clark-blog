import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <h5 className='footer-text'>
                    © {new Date().getFullYear()} Clark Newell, Built with
                    {` `}
                    <a href="https://www.gatsbyjs.org">Gatsby</a>
                </h5>    
            </div>
        </>
    ) 
}

export default Footer