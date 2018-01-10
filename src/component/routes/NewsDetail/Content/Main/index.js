import React from 'react'

// GraphQL
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
// import query from './gql/'
// import config from './gql/config'

const comment = ({replies, author, date, content, id}) => (
  <li key={id} className="media">
    <a href="" className="pull-left">
      <img src="img/avatar32.jpg" alt="" className="avatar" />
    </a>
    <div className="media-body">
      <a href="" className="media-heading">{author} <span data-role="relative-time" className="meta time-ago">12 jan</span></a>
      <p>{content}</p>
      <footer className="comment-item-footer">
        <ul className="list-inline">
          <li><a href="">Reply</a></li>
          <li><a href="">edit</a></li>
        </ul>
      </footer>
    </div>
    <ul className="children">
      { replies.map(reply) }
    </ul>
  </li>
)

const reply = ({author, date, content, id}) => (
  <li key={id} className="media">
    <a href="" className="pull-left">
      <img src="img/avatar32.jpg" alt="" className="avatar" />
    </a>
    <div className="media-body">
      <a href="" className="media-heading">{author} <span data-role="relative-time" className="meta time-ago">{date}</span></a>
      <p>{content}</p>
      <footer className="comment-item-footer">
        <ul className="list-inline">
          <li><a href="">edit</a></li>
        </ul>
      </footer>
    </div>
  </li>
)

class NewsDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      addedComment: Object,
      commentVal: false
    }
  }

  _handleCommentChange = (type, value) => {
    this.setState({ [type]: value })
  }

  _handleSubmitComment = (newsId) => {
    if (this.state.comment.length < 8) {
      this.setState({ commentVal: true })
      setTimeout(() => this.setState({ commentVal: false }), 5000)
    } else {
      this.props.submit(false, this.state.comment, newsId)
      .then(res => {
        this.setState({ comment: '' })
        this.setState({
          addedComment: res.data.addComment
        })
        console.log(res)
      })
    }
  }

  render() {
    const { commentVal, addedComment } = this.state
    const { newsId, title, author, date, commentCount, picture, content, comments } = this.props

    return (
      <div>
        <div className="post clearfix">
          <header className="page-header">
            <div className="page-title">
              <h2 className="title">{title}</h2>
              <div className="meta-wrapper">
                <span className="meta"><i className="fa fa-pencil-square-o"></i>{author}</span>
                <span className="meta"><i className="fa fa-calendar"></i> {date}</span>
                <span className="meta"><i className="fa fa-comment-o"></i>{commentCount}</span>
              </div>
            </div>
          </header>
          <img src={picture} alt="" className="post-thumbnail" />
          <p id="p_wrap">{content}</p>
        </div>

        <div id="comment-view" className="comment clearfix">
          <header className="widget-header">
            <h4 className="title">
            {`COMMENTS`}
            </h4>
          </header>
          <ul className="list">
            { comments.length === 0 ?
              <p style={{marginTop: 16 }}>Belum ada komentar</p> :
              comments.map(comment)
            }
          </ul>
        </div>

        <div id="reply-view" className="reply clearfix margin-top-20" style={{padding: 0}}>
          <header className="widget-header">
            <h4 className="title">
              LEAVE A REPLY
            </h4>
          </header>
          <div style={{marginTop: 8}}>
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="comment_message" className="required sr-only">Your comment <span>(required):</span></label>
                <p style={{color: 'red', transition: '0.6s', opacity: commentVal ? 1 : 0, visibility: commentVal ? 'visible' : 'hidden'}}>Komentar harus lebih dari 8 karakter</p>
                <textarea
                  value={this.state.comment}
                  onChange={(e) => this._handleCommentChange('comment', e.target.value)}
                  name="comment"
                  id="comment-message"
                  cols="88"
                  rows="7"
                  className="form-control"
                  placeholder="Your comment *"
                  required>
                </textarea>
              </div>
            </div>
            <div className="col-md-12">
              <input onClick={() => this._handleSubmitComment(newsId)} type="submit" value="Post Comment" id="submit-comment" className="btn pull-right" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const getQuery = gql`
  query($id:String!){
    news(id:$id){
      id,
      comment{
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

const query = gql`
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

export default graphql(query, {
  props: ({ mutate, newsId }) => ({
    submit: (isLogin, content, newsId) => mutate({
      variables: {
        isLogin,
        content,
        newsId
      },

      // Masih sering error writeQuery //

      update: (store, { data: { addComment } }) => {
        const data = store.readQuery({ query: getQuery, variables: { id: newsId } })
        data.news.comment.push(addComment)
        console.log(data)
        store.writeQuery({ query: getQuery, variables: { id: newsId }, data })
      }
    })
  })
})(NewsDetail)
