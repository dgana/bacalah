import React from 'react'

const Topbar = () => (
  <div id="nav-topbar" className="nav-topbar">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-6">
          <ul className="top-link menu top-bar-menu">
            <li><a href="#">Register</a></li>
            <li><a href="#">Login</a></li>
            <li><a href="#">Advertisement</a></li>
          </ul>
        </div>
        <div className="col-md-6 col-sm-6">
          <ul className="social-icon-list menu top-bar-menu">
            <li>
              <form id="search-form" className="form-search form-horizontal">
                <div className="input-append">
                  <input type="text" className="search-query" placeholder="" />
                  <button type="submit" className="btn"><i className="fa fa-search"></i></button>
                </div>
              </form>
            </li>
            <li><a href="#"><i className="fa fa-rss-square"></i></a></li>
            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
            <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)

export default Topbar
