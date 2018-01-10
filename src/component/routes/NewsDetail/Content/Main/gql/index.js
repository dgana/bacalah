module.exports = `
  mutation addComment($isLogin:Boolean!, $userId:String, $content:String!, $newsId:String!){
    addComment(isLogin:$isLogin, userId:$userId, content:$content, newsId:$newsId){
      id,
      content
      user{
        id
        username
      }
    }
  }
`
