const path = require('path');

const createTagPage = (createPage, posts) => {
  const allTagsIndexTemplate = path.resolve('src/templates/AllTags.js');
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
      graphql(
        `
          query {
            allMarkdownRemark(
              filter: { fields: { draft: { eq: false } } }
              sort: { order: ASC, fields: [ frontmatter___date]}
            ) {
              edges {
                node {
                  frontmatter {
                    path,
                    title,
                    tags
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        const posts = result.data.allMarkdownRemark.edges;
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