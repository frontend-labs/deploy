import React from "react";
import { graphql, Link } from "gatsby";
import styled from 'styled-components';
import Layout from '../components/Layout';

/** styles for min */

const Card = styled(Link)`
  border: 1px solid #c7c7c7;
  border-radius: 10px;
  padding: 10px;

  text-decoration: none;
  color: black;
  &:hover {
    border: 1px solid black;
  }
`;

const HeaderCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    font-size: 12px;
  }
`;

const Title = styled.div`
  margin-top: 20px;
  font-weight: bold;
`;

const Wrapper = styled.div`
  width: 1066px;
  margin: 0 auto;
  margin-top: 20px;
`;

const PostsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
`;

const CategoriesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;

  a {
    text-decoration: none;
    color: black;
  }
  a:hover {
    text-decoration: underline;
  }
`;

const Paginator = styled.div`
  margin-top: 30px;
  a {
    border-radius: 5px;
    margin-right: 10px;
    border: 1px solid black;
    padding: 10px;
    box-sizing: border-box;
    color: black;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default ({ data, pageContext }) => {
  const { allMdx } = data;
  const { numPages, tags } = pageContext;
  return(
    <Layout>
      <Wrapper>
        <h2>Categorias</h2>

        <CategoriesWrapper>
          {tags.map((tagName, index) => (
            <Link to={`/tag/${tagName}`} key={index}>
              <div>
                #{tagName}
              </div>
            </Link>
          ))}
        </CategoriesWrapper>

        <h2>Posts</h2>
        <PostsWrapper>
          {allMdx.edges.map(edge => {
            const { frontmatter } = edge.node;
            const tags = frontmatter.tags ? frontmatter.tags : [];
            return(
              <Card to={frontmatter.path}>
                <HeaderCard>
                  <div>{frontmatter.author}</div>
                  <span>{frontmatter.date}</span>
                </HeaderCard>
                <Title>{frontmatter.title}</Title>
                <div style={{ marginTop: 20 }}>
                  {tags.slice(0, 3).map((tag, index) => {
                    return(
                      <div key={index}>
                        #{tag}
                      </div>
                    )
                  })}
                </div>
              </Card>
            )
          })}
        </PostsWrapper>
        <Paginator>
          {Array.from({ length: numPages }).map((_, i) => {
            return(
              <>
                <Link to={i === 0 ? '/' : `/${i+1}`}>{i+1}</Link>
              </>
            )
          })}
        </Paginator>
      </Wrapper>

    </Layout>
  )
};

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    },
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
      ) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            path
            tags
            author
          }
        }
      }
    }
  }
`;
