module.exports = {
  categoriesQuery: `
    query($id:String!){
      news(id:$id) {
        id
        category {
          id
        }
      }
    }
  `,
  newsQuery: `
    query($categoryId:String!){
      newsByCategory(categoryId:$categoryId) {
        id
        title
        content
        clickCount
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
}
