import React from 'react'

// GraphQL
import gql from 'graphql-tag'
import { graphql, compose } from 'react-apollo'
import { detailNewsQuery, commentsQuery, addCommentMutation, addReplyMutation } from './gql/'
import htmlToDraft from 'html-to-draftjs';
import { EditorState, ContentState } from 'draft-js'
import {
  ShareButtons,
  generateShareIcon,
  ShareCounts,
} from 'react-share'

// import config from './gql/config'

// Utility
import { newsShortDate, fullDate } from '../../../../../util'

const {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} = ShareButtons;

// const {
//   FacebookShareCount,
//   GooglePlusShareCount,
//   LinkedinShareCount,
// } = ShareCounts;

const FacebookIcon = generateShareIcon('facebook')
const TwitterIcon = generateShareIcon('twitter')
const GooglePlusIcon = generateShareIcon('google')
const LinkedinIcon = generateShareIcon('linkedin')
const WhatsappIcon = generateShareIcon('whatsapp')


class NewsDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      commentVal: false,
      replyVal: false,
      reply: {
        id: 0,
        comment: ''
      }
    }
  }

  _handleCommentChange = (type, value) => {
    this.setState({ [type]: value })
  }

  _handleReplyChange = (type, value) => {
    this.setState(prevState => ({
      reply: {
        ...prevState.reply,
        comment: value
      }
    }))
  }

  _handleSubmitComment = (newsId) => {
    if (this.state.comment.length < 8) {
      this.setState({ commentVal: true })
      setTimeout(() => this.setState({ commentVal: false }), 5000)
    } else {
      this.props.submitComment(false, this.state.comment, newsId)
      .then(res => {
        this.setState({ comment: '' })
      })
    }
  }

  _onClickSubmitReply = () => {
    if (this.state.reply.comment.length < 8) {
      this.setState({ replyVal: true })
      setTimeout(() => this.setState({ replyVal: false }), 5000)
    } else {
      this.props.submitReply(false, this.state.reply.comment, this.state.reply.id)
      .then(res => {
        this.setState({
          reply: {
            id: 0,
            comment: ''
          }
        })
      })
    }
  }

  _openReplyBox = (id) => {
    this.setState({
      reply: {
        id,
        comment: ''
      }
    })
  }

  _hideReplyBox = (id) => {
    this.setState({
      reply: {
        id: 0,
        comment: ''
      }
    })
  }

  componentDidMount() {
    const firstReg = new RegExp(/<p style="text-align:start;">&nbsp;<[/]p>/g)
    const secondReg = new RegExp(/<p>&nbsp;<[/]p>/g)
    const thirdReg = new RegExp(/<br>/g)
    const fourthReg = new RegExp(/<h1>/g)
    const fifthReg = new RegExp(/<[/]h1>/g)

    const newContent = this.props.content.replace(firstReg, '').replace(secondReg, '').replace(thirdReg, '').replace(fourthReg, '').replace(fifthReg, '')

    this.refs.contentRefs.innerHTML = "<div class='content-container'>" + newContent + '</div>' + this.refs.contentRefs.innerHTML
  }

  render() {
    const { commentVal, addedComment, reply, replyVal } = this.state
    const { newsId, title, author, date, commentCount, picture, content, comments, pictureDetail } = this.props

    const blocksFromHtml = htmlToDraft(content);
    const { contentBlocks, entityMap } = blocksFromHtml;
    const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
    const editorState = EditorState.createWithContent(contentState);

    const shareUrl = 'http://bacalah.co' + this.props.path
    const titleUrl = 'Bacalah.co'
    return (
      <div>
        <div className="post clearfix">
          <header className="page-header">
            <FacebookShareButton
              url={shareUrl}
              quote={titleUrl}
              style={{display: 'inline-block', marginRight: 5, cursor: 'pointer'}}
              className="Demo__some-network__share-button">
              <FacebookIcon
                size={40}
                round />
            </FacebookShareButton>
            <TwitterShareButton
              url={shareUrl}
              title={title}
              style={{display: 'inline-block', marginRight: 5, cursor: 'pointer'}}
              className="Demo__some-network__share-button">
              <TwitterIcon
                size={40}
                round />
            </TwitterShareButton>
            <GooglePlusShareButton
              url={shareUrl}
              style={{display: 'inline-block', marginRight: 5, cursor: 'pointer'}}
              className="Demo__some-network__share-button">
              <GooglePlusIcon
                size={40}
                round />
            </GooglePlusShareButton>
            <LinkedinShareButton
              url={shareUrl}
              title={title}
              windowWidth={750}
              windowHeight={600}
              style={{display: 'inline-block', marginRight: 5, cursor: 'pointer'}}
              className="Demo__some-network__share-button">
              <LinkedinIcon
                size={40}
                round />
            </LinkedinShareButton>
            <WhatsappShareButton
              url={shareUrl}
              title={title}
              separator=":: "
              style={{display: 'inline-block', cursor: 'pointer'}}
              className="Demo__some-network__share-button">
              <WhatsappIcon size={40} round />
            </WhatsappShareButton>

            <div className="page-title" style={{marginTop: 14}}>
              <h2 className="title" style={{fontSize: 28}}>{title}</h2>
              <div className="meta-wrapper">
                <span className="meta"><i className="fa fa-calendar"></i> {fullDate(date)}</span>
                <span className="meta"><i className="fa fa-comment-o"></i>{commentCount}</span>
              </div>
            </div>
          </header>
          <img src={picture} alt="" className="post-thumbnail" />
          <p style={{color: "#A1A1A1", margin: '0px 0px 18px'}}>{pictureDetail}</p>
          <div ref="contentRefs">

          </div>
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
              comments.map(item => {
                const { replies, author, date, content, commentId } = item
                return (
                  <li key={commentId} className="media">
                    <a href="" className="pull-left">
                      <img src="img/avatar32.jpg" alt="" className="avatar" />
                    </a>
                    <div className="media-body">
                      <a href="" className="media-heading">{author} <span data-role="relative-time" className="meta time-ago">{newsShortDate(date)}</span></a>
                      <p>{content}</p>
                      <footer className="comment-item-footer">
                        <ul className="list-inline">
                          <li style={{cursor: 'pointer'}} onClick={() => this._openReplyBox(commentId)}>Reply</li>
                          {/* <li><a href="">edit</a></li> */}
                        </ul>
                      </footer>
                    </div>
                    <ul className="children">
                      { replies.map(item => {
                        const { author, date, content, id } = item
                        return (
                          <div key={id}>
                            <li className="media">
                              <a href="" className="pull-left">
                                <img src="img/avatar32.jpg" alt="" className="avatar" />
                              </a>
                              <div className="media-body">
                                <a href="" className="media-heading">{author} <span data-role="relative-time" className="meta time-ago">{newsShortDate(date)}</span></a>
                                <p>{content}</p>
                                <footer className="comment-item-footer">
                                  <ul className="list-inline">
                                    {/* <li><a href="">edit</a></li> */}
                                  </ul>
                                </footer>
                              </div>
                            </li>
                          </div>
                        )
                      })
                      }
                      { commentId === reply.id ?
                        <div className="form-group" style={{padding: "0px 8px"}}>
                          <label htmlFor="comment_message" className="required sr-only">Reply <span>(required):</span></label>
                          <p style={{color: 'red', transition: '0.6s', marginBottom: 0, opacity: replyVal ? 1 : 0, visibility: replyVal ? 'visible' : 'hidden'}}>Balas komentar harus lebih dari 8 karakter</p>
                          <textarea
                            value={this.state.reply.comment}
                            onChange={(e) => this._handleReplyChange('comment', e.target.value)}
                            name="comment"
                            id="comment-message"
                            cols="88"
                            rows="3"
                            className="form-control"
                            placeholder="Your comment *"
                            required>
                          </textarea>
                          <input style={{marginTop: 6}} onClick={() => this._onClickSubmitReply()} type="submit" value="Post Comment" className="btn pull-right" />
                          <input style={{marginTop: 6, marginRight: 12}} onClick={() => this._hideReplyBox(reply.id)} type="submit" value="Cancel" className="btn pull-right" />
                        </div> : null
                      }
                    </ul>
                  </li>
                )
              })
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

export default compose(
  graphql(gql(addCommentMutation), {
    props: ({ mutate, ownProps }) => ({
      submitComment: (isLogin, content, newsId) => mutate({
        variables: {
          isLogin,
          content,
          newsId
        },
        update: (store, { data: { addComment } }) => {
          const data = store.readQuery({ query: gql(detailNewsQuery), variables: { id: newsId } })
          data.news.comment.push(addComment)
          store.writeQuery({ query: gql(detailNewsQuery), variables: { id: newsId }, data })
        }
      })
    })
  }),
  graphql(gql(addReplyMutation), {
    props: ({ mutate, ownProps }) => ({
      submitReply: (isLogin, content, commentId, newsId) => mutate({
        variables: {
          isLogin,
          content,
          commentId
        },
        update: (store, { data: { addReply } }) => {
          const data = store.readQuery({ query: gql(detailNewsQuery), variables: { id: ownProps.newsId } })
          const getCommentIndex = data.news.comment.findIndex(item => item.id === commentId)
          data.news.comment[getCommentIndex].replies.push(addReply)
          store.writeQuery({ query: gql(detailNewsQuery), variables: { id: ownProps.newsId }, data })
        }
      })
    })
  })
) (NewsDetail)
