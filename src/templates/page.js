import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Page extends Component {
    render() {
        const {data} = this.props
        return (
            <div>
                <h1>{data.wordpressPage.title}</h1>
                <div
                    dangerouslySetInnerHTML={{
                        __html: data.wordpressPage.content
                    }}
                />
            </div>
        )
    }
}

export const pageQuery = graphql`
    query ($slug: String!) {
        wordpressPage(slug: { eq: $slug }) {
            title
            slug
            content
        }
    }
`

Page.propTypes = {
    data: PropTypes.object.isRequired
}