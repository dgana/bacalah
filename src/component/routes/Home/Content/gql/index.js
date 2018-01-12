module.exports = {
  allNewsQuery: `
    query{
      allNews{
        id
        title
        content
        author{
          id
        }
        isFeatured
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
