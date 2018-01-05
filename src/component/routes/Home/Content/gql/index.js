module.exports = {
  allNewsQuery: `
    query($categoryId:String!){
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
      },
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
  `,
  categoriesQuery: `
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
