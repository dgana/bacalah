import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

const Content = (props) => {
  console.log(props.match.url);
  return (
    <div>
      <header className="page-header">
          <div className="page-title">
            <h2 className="title">Travel</h2>
          </div>
        </header>
        <div className="margin-bottom-10">
          <a className="tag" href="">Architecture</a>
          <a className="tag" href="">Design</a>
          <a className="tag" href="">Science</a>
          <a className="tag" href="">Cities</a>
          <a className="tag" href="">Tips</a>
          <a className="tag" href="">Deals</a>
          <a className="tag" href="">Apple</a>
          <a className="tag" href="">Google</a>
          <a className="tag" href="">Microsoft</a>
          <a className="tag" href="">Sploid</a>
          <a className="tag" href="">Paleofuture</a>
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
             <img src="img/travel_1.jpg" alt="" />
           </div>
           <div className="list-inner col-md-8">
             <h4 className="title">
               <a href="">15 lesser-known ski resorts to check out this winter</a>
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
             <img src="img/travel_2.jpg" alt="" />
           </div>
           <div className="list-inner col-md-8">
             <h4 className="title">
               <a href="">Wild culinary world of Albert Adria</a>
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
             <img src="img/travel_3.jpg" alt="" />
           </div>
           <div className="list-inner col-md-8">
             <h4 className="title">
               <a href="">Hottest new hotels for 2014</a>
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
             <img src="img/travel_4.jpg" alt="" />
           </div>
           <div className="list-inner col-md-8">
             <h4 className="title">
               <a href="">China's magical ancient capital</a>
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
             <img src="img/travel_5.jpg" alt="" />
           </div>
           <div className="list-inner col-md-8">
             <h4 className="title">
               <a href="">15 lesser-known ski resorts</a>
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
             <img src="img/travel_6.jpg" alt="" />
           </div>
           <div className="list-inner col-md-8">
             <h4 className="title">
               <a href="">Video game worlds we want to visit</a>
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

        <footer className="page-footer clearfix">

          <ul className="pagination">
            <li>Pages:</li>
            <li className="active"><a href="">1</a></li>
            <li><a href="">2</a></li>
            <li><a href="">3</a></li>
            <li><a href="">4</a></li>
          </ul>

        </footer>

      </div>
    </div>
  )
}

export default Content
