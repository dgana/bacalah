module.exports = {
  allNewsQuery: `
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
      },
      categories{
        id
        name
        news {
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
    }  
  `
}
