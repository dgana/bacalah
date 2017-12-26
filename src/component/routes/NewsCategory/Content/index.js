import React from 'react'
import { Link } from 'react-router-dom'

// Content Component
import Pagination from './Pagination'

// Utility
import { capitalizeFirstLetter } from '../../../../util'

const Content = (props) => {
  const getCategoryName = props.match.url.split('/')[1]
  return (
    <div className="post clearfix">
      <header className="page-header">
        <div className="page-title">
          <h2 className="title">{capitalizeFirstLetter(getCategoryName)}</h2>
        </div>
        </header>
        <div className="margin-bottom-10">
          <Link className="tag" to="/apps">Apps</Link>
          <Link className="tag" to="/design">Design</Link>
          <Link className="tag" to="/money">Money</Link>
          <Link className="tag" to="/education">Education</Link>
          <Link className="tag" to="/cars">Cars</Link>
          <Link className="tag" to="/travel">Travel</Link>
          <Link className="tag" to="/law">Law</Link>
          <Link className="tag" to="/video">Video</Link>
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
             <Link to={`${props.match.url}/1`}>15 lesser-known ski resorts to check out this winter</Link>
           </h4>
           <p>This month, CNNGo visits South Africa's largest city and one of its most exciting -- home to radical theater, apartheid relics and a museum of beer.This month, CNNGo visits South Africa's largest city and one of its most exciting -- home to radical theater, apartheid </p>
         </div>
      </div>

      <div className="post margin-top-20 clearfix">
        <div className="row">
         <div className="list-item clearfix">
           <div className="list-thumbnail col-md-4">
             <Link to={`${props.match.url}/1`}><img src="img/travel_1.jpg" alt="" /></Link>
           </div>
           <div className="list-inner col-md-8">
             <h4 className="title">
               <Link to={`${props.match.url}/1`}>15 lesser-known ski resorts to check out this winter</Link>
             </h4>
             <div className="meta-wrapper">
                <span className="meta"><i className="fa fa-calendar"></i> Sep 23, 2013</span>
                <span className="meta"><i className="fa fa-comment-o"></i> 10</span>
                <span className="meta"><i className="fa fa-share-square-o"></i> 3</span>
              </div>
             <p>Other airlines sharing the seven-star rating and winning a place among the top 10 safest airlines are, in alphabetical order, Air New Zealand, All Nippon Airways, Cathay Pacific Airways, Emirates, Etihad Airways, Eva Air, Royal Jordanian, Singapore Airlines and Virgin Atlantic.</p>
           </div>
         </div>

         <div className="list-item clearfix">
           <div className="list-thumbnail col-md-4">
             <Link to={`${props.match.url}/2`}><img src="img/travel_2.jpg" alt="" /></Link>
           </div>
           <div className="list-inner col-md-8">
             <h4 className="title">
               <Link to={`${props.match.url}/2`}>Wild culinary world of Albert Adria</Link>
             </h4>
             <div className="meta-wrapper">
                <span className="meta"><i className="fa fa-calendar"></i> Sep 23, 2013</span>
                <span className="meta"><i className="fa fa-comment-o"></i> 10</span>
                <span className="meta"><i className="fa fa-share-square-o"></i> 3</span>
              </div>
             <p>Other airlines sharing the seven-star rating and winning a place among the top 10 safest airlines are, in alphabetical order, Air New Zealand, All Nippon Airways, Cathay Pacific Airways, Emirates, Etihad Airways, Eva Air, Royal Jordanian, Singapore Airlines and Virgin Atlantic.</p>
           </div>
         </div>

         <div className="list-item clearfix">
           <div className="list-thumbnail col-md-4">
             <Link to={`${props.match.url}/3`}><img src="img/travel_3.jpg" alt="" /></Link>
           </div>
           <div className="list-inner col-md-8">
             <h4 className="title">
               <Link to={`${props.match.url}/3`}>Hottest new hotels for 2014</Link>
             </h4>
             <div className="meta-wrapper">
                <span className="meta"><i className="fa fa-calendar"></i> Sep 23, 2013</span>
                <span className="meta"><i className="fa fa-comment-o"></i> 10</span>
                <span className="meta"><i className="fa fa-share-square-o"></i> 3</span>
              </div>
             <p>Other airlines sharing the seven-star rating and winning a place among the top 10 safest airlines are, in alphabetical order, Air New Zealand, All Nippon Airways, Cathay Pacific Airways, Emirates, Etihad Airways, Eva Air, Royal Jordanian, Singapore Airlines and Virgin Atlantic.</p>
           </div>
         </div>

         <div className="list-item clearfix">
           <div className="list-thumbnail col-md-4">
             <Link to={`${props.match.url}/4`}><img src="img/travel_4.jpg" alt="" /></Link>
           </div>
           <div className="list-inner col-md-8">
             <h4 className="title">
              <Link to={`${props.match.url}/4`}>China's magical ancient capital</Link>
             </h4>
             <div className="meta-wrapper">
                <span className="meta"><i className="fa fa-calendar"></i> Sep 23, 2013</span>
                <span className="meta"><i className="fa fa-comment-o"></i> 10</span>
                <span className="meta"><i className="fa fa-share-square-o"></i> 3</span>
              </div>
             <p>Other airlines sharing the seven-star rating and winning a place among the top 10 safest airlines are, in alphabetical order, Air New Zealand, All Nippon Airways, Cathay Pacific Airways, Emirates, Etihad Airways, Eva Air, Royal Jordanian, Singapore Airlines and Virgin Atlantic.</p>
           </div>
         </div>

         <div className="list-item clearfix">
           <div className="list-thumbnail col-md-4">
             <Link to={`${props.match.url}/5`}><img src="img/travel_5.jpg" alt="" /></Link>
           </div>
           <div className="list-inner col-md-8">
             <h4 className="title">
               <Link to={`${props.match.url}/5`}>15 lesser-known ski resorts</Link>
             </h4>
             <div className="meta-wrapper">
                <span className="meta"><i className="fa fa-calendar"></i> Sep 23, 2013</span>
                <span className="meta"><i className="fa fa-comment-o"></i> 10</span>
                <span className="meta"><i className="fa fa-share-square-o"></i> 3</span>
              </div>
             <p>Other airlines sharing the seven-star rating and winning a place among the top 10 safest airlines are, in alphabetical order, Air New Zealand, All Nippon Airways, Cathay Pacific Airways, Emirates, Etihad Airways, Eva Air, Royal Jordanian, Singapore Airlines and Virgin Atlantic.</p>
           </div>
         </div>

        </div>

        <Pagination />

      </div>
    </div>
  )
}

export default Content
