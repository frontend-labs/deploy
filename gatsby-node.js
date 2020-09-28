const path = require('path');
const homeTemplate = path.resolve('src/templates/home.js');

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

const getTags = (posts) => {
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
  return Object.keys(postsByTag).sort();
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('src/templates/blog-post.js');
    resolve(
      graphql(`
        query {
          allMdx(
            sort: {fields: [frontmatter___date], order: DESC}
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
      `).then(result => {
        const posts = result.data.allMdx.edges;
        const postsPerPage = 6;
        const numPages = Math.ceil(posts.length / postsPerPage);
        const tags = getTags(posts);
        Array.from({ length: numPages }).forEach((_, i) => {
          createPage({
            path: i === 0 ? `/` : `/${i+1}`,
            component: homeTemplate,
            context: {
              tags,
              numPages,
              limit: postsPerPage,
              skip: i * postsPerPage,
              currentPage: i + 1
            }
          });
        });
        


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