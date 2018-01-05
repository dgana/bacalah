module.exports = `
  query{
    allNews{
      id
      title
      content
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
