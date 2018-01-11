module.exports = {
  categoriesQuery: `
    query{
      categories {
        id
        name
      }
    }
  `,
  addNewsMutation: `
    mutation($userId:String!,$categoryId:String!,$title:String,$content:String!,$featured:Boolean!,$picturePath:String){
      addNews(userId:$userId,categoryId:$categoryId,title:$title,content:$content,featured:$featured,picturePath:$picturePath){
        id
        title
        content
        author
        isFeatured
        clickCount
        createdAt
        pictures{
          id
          path
        }
        comment{
          id
          user{
            id
          }
          replies{
            id
            user{
              id
            }
          }
        }
      }
    }
  `
}
