const path = require('path');

const createTagPage = (createPage, posts) => {
  const singleTagIndexTemplate = path.resolve('src/templates/SingleTag.js');

  const postsByTag = {};
  posts.forEach(({ node }) => {
    if(node.frontmatter.tags) {
      node.frontmatter.tags.forEach(tag => {
        if(!postsByTag[tag]) {
          postsByTag[tag] = [];
        }
        postsByTag[tag].push(node);
      })
    }
  });
  const tags = Object.keys(postsByTag);


  tags.forEach(tagName => {
    const posts = postsByTag[tagName]
    createPage({
      path: `/tag/${tagName}`,
      component: singleTagIndexTemplate,
      context: {
        posts,
        tagName
      }
    })
  })
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('src/templates/blog-post.js');
    resolve(
      graphql(`
        query {
          allMdx(sort: {fields: [frontmatter___date], order: DESC}) {
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
      `).then(result => {
        const posts = result.data.allMdx.edges;
        createTagPage(createPage, posts);
        posts.forEach(({ node }, index) => {
          const path = node.frontmatter.path;
          createPage({
            path,
            component: blogPostTemplate,
            context: {
              pathSlug: path,
              prev: index === 0 ? null : posts[index - 1].node,
              next: index === (posts.length - 1) ? null : posts[index + 1].node
            }
          })
          resolve();
        });
      })
    )
  });
};