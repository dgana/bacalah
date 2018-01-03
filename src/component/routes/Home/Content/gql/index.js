module.exports = `
  query{
    allNews{
      id
      title
      content
      author {
        id
      }
      isFeatured
      category {
        id
        name
      }
      comment {
        id
      }
      pictures {
        id
        path
      }
      createdAt
    }
  }
`
