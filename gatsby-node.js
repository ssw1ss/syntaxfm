const fs = require("fs")
const path = require("path")
const slugify = require("@sindresorhus/slugify")

exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        assets: path.resolve(__dirname, "src/assets"),
        ui: path.resolve(__dirname, "src/ui"),
      },
    },
  })
  const config = getConfig()
  delete config.resolve.alias["core-js"]
  config.resolve.modules = [
    path.resolve(__dirname, "node_modules/gatsby/node_modules"), // for Gatsby's core-js@2
    "node_modules", // your modules w/ core-js@3
  ]
  actions.replaceWebpackConfig(config)
}

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "Mdx") {
    createNodeField({
      node,
      name: "slug",
      value: `episodes/${slugify(node.frontmatter.title)}`,
    })
  }
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const episodeTemplate = path.resolve(`src/templates/episodes/newSingle.js`)
  const { data } = await graphql(`
    query myQuickQuery {
      allMdx(sort: { fields: frontmatter___number, order: DESC }) {
        nodes {
          id
          fields {
            slug
          }
          frontmatter {
            title
            number
            url
          }
        }
      }
    }
  `)

  fs.writeFileSync(
    "./src/episodesList.json",
    JSON.stringify(data.allMdx.nodes, null, 2),
    "utf-8"
  )

  createPage({
    path: "/",
    component: episodeTemplate,
    context: {
      id: data.allMdx.nodes[0].id,
    },
  })

  // create individual episodes
  data.allMdx.nodes.forEach(episode => {
    const { id } = episode
    createPage({
      path: episode.fields.slug,
      component: episodeTemplate,
      context: {
        id,
      },
    })
  })
}
