module.exports = `
  query{
    allNews {
      id
      title
      pictures {
        id
        path
      }
      content
      clickCount
      category {
        id
        name
      }
    }
  }
`
