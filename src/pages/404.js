import React from 'react'

class NotFoundPage extends React.Component {
  render() {
    return (
      <>404 not found :(</>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`