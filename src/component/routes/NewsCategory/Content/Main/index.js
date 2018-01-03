import React from 'react'
import { Link } from 'react-router-dom'

// Content Component
import Pagination from '../Pagination'

// Utility
import { capitalizeFirstLetter, limitString } from '../../../../../util'

const category = ({ id, name }) => (
  <Link className="tag" key={`cat-${id}`} to={`/${id}`}>
    {name}
  </Link>
)

const detailNews = ({ currentId, id, path, title, content, createdAt, commentCount }) => (
  <div key={id} className="list-item clearfix">
    <div className="list-thumbnail col-md-4">
      <Link key={`catdet-${id}`} to={`/${currentId}/${id}`}><img src={path} alt="no-pic" /></Link>
    </div>
    <div className="list-inner col-md-8">
      <h4 className="title">
        <Link key={`catdet2-${id}`} to={`/${currentId}/${id}`}>{title}</Link>
      </h4>
      <div className="meta-wrapper">
         <span className="meta"><i className="fa fa-calendar"></i>{createdAt}</span>
         <span className="meta"><i className="fa fa-comment-o"></i>{commentCount}</span>
       </div>
      <p>{limitString(content)}</p>
    </div>
  </div>
)

export default ({ categories, news, categoryName, currentId }) => {
    return (
      <div className="post clearfix">
        <header className="page-header">
          <div className="page-title">
            <h2 className="title">{capitalizeFirstLetter(categoryName)}</h2>
          </div>
          </header>
          <div className="margin-bottom-10">
            {categories.map(category)}
          </div>
        <div className="feature-view">
          <div className="card-thumbnail">
           <img src="img/travel_11.jpg" alt="" />
           <div className="card-meta">
             <ul className="list">
               <li><a href=""><i className="fa fa-heart"></i>121</a></li>
               <li><a href=""><i className="fa fa-comment"></i>320</a></li>
             </ul>
           </div>
          </div>
          <div className="col-inner">
             <h4 className="title">
               <Link to={`/${currentId}/1`}>15 lesser-known ski resorts to check out this winter</Link>
             </h4>
             <p>This month, CNNGo visits South Africa's largest city and one of its most exciting -- home to radical theater, apartheid relics and a museum of beer.This month, CNNGo visits South Africa's largest city and one of its most exciting -- home to radical theater, apartheid </p>
           </div>
        </div>

        <div className="post margin-top-20 clearfix">
          <div className="row">
            {news.map(detailNews)}
          </div>

          <Pagination />

        </div>
      </div>
    )
  }
