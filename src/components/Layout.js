import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import styled, { createGlobalStyle } from 'styled-components';
import { MDXProvider } from "@mdx-js/react";
import { Speakerdeck } from "./Speakerdeck";
import './layout.css';
import { Pre } from './Pre';

const Global = createGlobalStyle`
  body {
    font-family: 'Nunito Sans', sans-serif;
    margin: 0;
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
  Speakerdeck,
  pre: props => <div {...props} />,
  code: Pre,
};

/** Styles for min */

const Wrapper = styled.div`
  height: 300px;
  width: 100%;
  background: #090a0b;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #aeb5b8;
  div {
    text-align: center;
  }
  h1 a{
    color: #aeb5b8;
    text-decoration: none;
  }
`;

const FooterWrapper = styled.div`
  width: 1066px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

const HeaderFooter = styled.div`
  padding: 40px 0;
  color: #FFFFFF;
  background-color: #242424;
`;

const MiniFooter = styled.div`
  padding: 20px 0;
  background-color: black;
  color: #FFFFFF;
`;

const currentYear = new Date().getFullYear();

const Layout = ({ children }) => {
  const data = useStaticQuery(query);
  const { title } = data.site.siteMetadata;
  return(
    <React.Fragment>
      <Global />
        <Wrapper>
          <div>
            <h1>
              <Link to={"/"}>
                {title}
              </Link>
            </h1>
            <span>
              Lugar donde podras encontrar publicaciones sobre tecnologicas Frontend
            </span>
          </div>
        </Wrapper>
      <MDXProvider components={components}>{children}</MDXProvider>
      <footer style={{ marginTop: 30 }}>
        <HeaderFooter>
          <FooterWrapper>
            <div>
              <div style={{ fontSize: 36 }}>Quieres escribir una publicación?</div>
              <div>Porfavor leer nuestra guia de contribución.</div>
            </div>
          </FooterWrapper>
        </HeaderFooter>
        <MiniFooter>
          <FooterWrapper>
            <span>
              © {currentYear}, Construido por el equipo de Frontendlabs
            </span>
          </FooterWrapper>
        </MiniFooter>
      </footer>
    </React.Fragment>
  )
};

export default Layout;