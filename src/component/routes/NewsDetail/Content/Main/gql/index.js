const addCommentMutation = `
  mutation addComment($isLogin:Boolean!, $userId:String, $content:String!, $newsId:String!){
    addComment(isLogin:$isLogin, userId:$userId, content:$content, newsId:$newsId){
      id,
      content
      user{
        id
        username
      }
      replies{
        id
        content
        user{
          id
          username
        }
      }
    }
  }
`

const detailNewsQuery = `
  query detailNewsQuery($id:String!){
    news(id:$id){
      id
      comment{
        id
      }
    }
  }
`

module.exports.addCommentMutation = addCommentMutation
module.exports.detailNewsQuery = detailNewsQuery
