import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import styled, { createGlobalStyle } from 'styled-components';
import { MDXProvider } from "@mdx-js/react"

const Global = createGlobalStyle`
  body {
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
  }
`;

const Box = styled.div`
  width: 960px;
  margin: 0 auto;
`;

const Header = styled.div`
  padding: 20px;
  background-color: #3a26a7;
  h1 {
    padding: 0;
    width: 960px;
    margin: 0 auto;
    color: white;
    a {
      color: white;
      text-decoration: none;
    }
  }
`;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const YouTube = ({ id }) => <div>Shortcodes YouTube {id} !!</div>;

const H3 = styled.p`
  color: orange;
`;

const components = {
  p: H3,
  YouTube
};

const Layout = ({ children }) => {
  const data = useStaticQuery(query);
  const { title } = data.site.siteMetadata;
  return(
    <React.Fragment>
      <Global />
      <Header>
        <h1>
          <Link to={"/"}>
            {title}
          </Link>
        </h1>
      </Header>
      <Box>
        <MDXProvider components={components}>{children}</MDXProvider>
      </Box>
    </React.Fragment>
  )
};

export default Layout;