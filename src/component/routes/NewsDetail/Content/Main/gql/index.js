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
        replies{
          id
        }
      }
    }
  }
`

const commentsQuery = `
  query($news:String!){
    comments(news:$news) {
      id
      user {
        id
      }
      replies {
        id
        user {
          id
        }
      }
    }
  }
`

const addReplyMutation = `
  mutation addReply($isLogin:Boolean!, $userId:String, $content:String!, $commentId:String!){
    addReply(isLogin:$isLogin, userId:$userId, content:$content, commentId:$commentId){
      id,
      content
      user{
        id
        username
      }
    }
  }
`

module.exports.addCommentMutation = addCommentMutation
module.exports.detailNewsQuery = detailNewsQuery
module.exports.commentsQuery = commentsQuery
module.exports.addReplyMutation = addReplyMutation
