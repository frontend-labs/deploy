import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/Layout"
import { Card, Tag, CardWrapper } from "@frontendlabs/ui"

const Wrapper = styled.div`
  box-sizing: border-box;
  margin: 30px 0;
  background-color: #312359;
  padding-top: 30px;
  text-align: center;
  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-size: 36px;
    color: white;
  }
  border-radius: 10px;
`

const CategoriesWrapper = styled.div`
  box-sizing: border-box;
  background-color: #21173e;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 40px 20px 26px;
`

const getTags = posts => {
  const postsByTag = {}
  posts.forEach(({ node }) => {
    if (node.frontmatter.tags) {
      node.frontmatter.tags.forEach(tag => {
        if (!postsByTag[tag]) {
          postsByTag[tag] = []
        }
        postsByTag[tag].push(node)
      })
    }
  })
  return Object.keys(postsByTag).sort()
}
export default ({ data }) => {
  const { allMdx } = data
  const tags = getTags(allMdx.edges)
  return (
    <Layout>
      <Wrapper>
        <h2>Categorias</h2>

        <CategoriesWrapper>
          {tags.map((tagName, index) => (
            <Link to={`tag/${tagName}`}>
              <Tag key={index} name={tagName} />
            </Link>
          ))}
        </CategoriesWrapper>
      </Wrapper>

      <CardWrapper>
        {allMdx.edges.map(edge => {
          const { frontmatter } = edge.node
          const tags = frontmatter.tags ? frontmatter.tags : []
          console.log("frontmatter.title", frontmatter.title)
          console.log("frontmatter.tags", tags)
          return (
            <Card
              renderLink={({ children, className }) => (
                <Link to={frontmatter.path} className={className}>
                  {children}
                </Link>
              )}
              author={frontmatter.author}
              avatar="https://avatars0.githubusercontent.com/u/4754339?s=400&v=4"
              date={frontmatter.date}
              title={frontmatter.title}
              tags={frontmatter.tags ? frontmatter.tags : []}
            />
          )
        })}
      </CardWrapper>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
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
`
