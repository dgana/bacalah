import React from 'react'

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

const NewsDetail = props => (
  <div>
    <div className="post clearfix">
    <header className="page-header">
      <div className="page-title">
        <h2 className="title">{props.title}</h2>
        <div className="meta-wrapper">
          <span className="meta"><i className="fa fa-pencil-square-o"></i>{props.author}</span>
          <span className="meta"><i className="fa fa-calendar"></i> {props.date}</span>
          <span className="meta"><i className="fa fa-comment-o"></i>{props.commentCount}</span>
        </div>
      </div>
    </header>
    <img src={props.picture} alt="" className="post-thumbnail" />
    <p>{props.content}</p>
  </div>

  <div className="related-post margin-top-20 clearfix">
     <header className="widget-header">
        <h4 className="title">
          We recommend
        </h4>
      </header>

    <div className="post col-md-3 col-sm-3 col-xs-12">
      <img src="img/post_1.jpg" alt="" className="post-thumbnail" />
      <div className="title">
        <a>Gay waitress loses job after investigation into whether customers denied tip.
        </a>
      </div>
    </div>

    <div className="post col-md-3 col-sm-3 col-xs-12">
      <img src="img/post_2.jpg" alt="" className="post-thumbnail" />
      <div className="title">
        <a>Can wind towers take the heat off UAE's air-con addiction?
        </a>
      </div>
    </div>

    <div className="post col-md-3 col-sm-3 col-xs-12">
      <img src="img/post_3.jpg" alt="" className="post-thumbnail" />
      <div className="title">
        <a>Shia LaBeouf offers cloudy plagiarism apology
        </a>
      </div>
    </div>

    <div className="post col-md-3 col-sm-3 col-xs-12">
      <img src="img/post_4.jpg" alt="" className="post-thumbnail" />
      <div className="title">
        <a>Advances in Metastatic Melanoma
        </a>
      </div>
    </div>

    </div>

    <div id="comment-view" className="comment clearfix">
      <header className="widget-header">
        <h4 className="title">
        {`COMMENTS`}
        </h4>
      </header>
      <ul className="list">
        {props.comments.map(comment)}
      </ul>

      <div className="load-more cleafix" data-role="more">
        <a href="" data-action="more-posts" className="btn col-md-12">Load more comments</a>
      </div>

    </div>

    <div id="reply-view" className="reply clearfix margin-top-20">
      <header className="widget-header">
        <h4 className="title">
          LEAVE A REPLY
        </h4>
      </header>
      <div className="margin-top-20">
        <div className="col-md-4">
          <div className="form-group">
            <label htmlFor="name" className="sr-only">Name(required):</label>
            <input type="name" className="form-control" id="name" placeholder="Name *" />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="sr-only">Email address(required):</label>
            <input type="email" className="form-control" id="email" placeholder="Enter email *" />
          </div>
        </div>
        <div className="col-md-8">
          <div className="form-group">
            <label htmlFor="comment_message" className="required sr-only">Your comment <span>(required):</span></label>
            <textarea name="message" id="comment-message" cols="88" rows="7" className="form-control" placeholder="Your comment *" required></textarea>
          </div>
        </div>
        <div className="col-md-12">
          <input type="submit" value="Post Comment" id="submit-comment" className="btn pull-right" />
        </div>
      </div>
    </div>
  </div>
)

export default NewsDetail
