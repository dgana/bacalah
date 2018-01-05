module.exports = `
  query($categoryId:String!){
    newsByCategory(categoryId:$categoryId) {
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
