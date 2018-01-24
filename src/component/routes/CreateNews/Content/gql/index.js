module.exports = {
  allNewsQuery: `
    query{
      allNews {
        id
        title
        content
        author{
          id
        }
        isFeatured
        clickCount
        createdAt
        category{
          id
        }
        pictures{
          id
          path
        }
        comment{
          id
        }
      }
    }
  `,
  categoriesQuery: `
    query{
      categories {
        id
        name
      }
    }
  `,
  addNewsMutation: `
    mutation($userId:String!,$categoryId:String!,$title:String!,$content:String!,$featured:Boolean!,$picturePath:String){
      addNews(userId:$userId,categoryId:$categoryId,title:$title,content:$content,featured:$featured,picturePath:$picturePath){
        id
        title
        content
        author{
          id
        }
        isFeatured
        clickCount
        createdAt
        category{
          id
        }
        pictures{
          id
          path
        }
        comment{
          id
        }
      }
    }
  `,
  registerMutation: `
    mutation($userId:String!, $username:String!, $password:String!, $email:String!, $firstName:String!, $lastName:String!, $isAdmin:Boolean!){
      addUser(userId:$userId, username:$username, password:$password, email:$email, firstName:$firstName, lastName:$lastName, isAdmin:$isAdmin){
        ok
        user{
          id
          username
        }
        errors {
          message
        }
      }
    }
  `,
  editNewsMutation: `
    mutation($newsId:String!,$CategoryId:String,$title:String,$content:String,$featured:Boolean,$picturePath:String){
      editNews(newsId:$newsId,CategoryId:$CategoryId,title:$title,content:$content,featured:$featured,picturePath:$picturePath){
        id
        title
        content
        author{
          id
        }
        isFeatured
        clickCount
        createdAt
        category{
          id
        }
        pictures{
          id
          path
        }
        comment{
          id
        }
      }
    }
  `
}
