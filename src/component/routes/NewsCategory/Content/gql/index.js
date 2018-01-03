module.exports = `
  query{
    categories{
      id
      name
      news {
        id
        title
        content
        isFeatured
        createdAt
        pictures{
          path
        }
        comment {
          id
        }
      }
    }
  }
`
