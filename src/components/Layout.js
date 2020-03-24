import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import styled, { createGlobalStyle } from 'styled-components';
import { MDXProvider } from "@mdx-js/react";
import { Speakerdeck } from "./Speakerdeck";
import { WritePost, Footer  } from '@frontendlabs/ui';
import './layout.css';

const Global = createGlobalStyle`
  body {
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
  }
`;

const Box = styled.div`
  width: 1068px;
  margin: 0 auto;
`;

const Header = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  background-color: #312359;
  padding: 0 20px;
  h1 {
    font-size: 20px;
    padding: 0;
    margin: 0;
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

const p = styled.p`
  color: black;
`;

const a = styled.a`
  color: black;
`;

const components = {
  p: p,
  a: a,
  YouTube,
  Speakerdeck
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
      <WritePost />
      <Footer />
    </React.Fragment>
  )
};

export default Layout;