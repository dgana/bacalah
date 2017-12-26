import React from 'react'

import { Link } from 'react-router-dom'

const Category = (props) => (
  <header className="site-header">
    <div className="container">
      <div className="row">
        <div className="col-md-2">
          <Link to='/'>
            <h1 className="site-logo title">
              kabarkepri
            </h1>
          </Link>
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="main-menu">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
          </button>
        </div>
        <nav id="main-menu" className="menu-wrapper col-md-10 collapse navbar-collapse">
          <ul className="menu nav navbar-nav">
            <li className="dropdown"><a href="" className="dropdown-toggle" data-toggle="dropdown">Technology <i className="fa fa-angle-down"></i></a>
              <ul className="children sub-menu dropdown-menu">
                <li>
                  <Link to='/apps'>Apps</Link>
                </li>
                <li>
                  <Link to='/design'>Design</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to='/health'>Health</Link>
            </li>
            <li>
              <Link to='/money'>Money</Link>
            </li>
            <li>
              <Link to='/education'>Education</Link>
            </li>
            <li>
              <Link to='/cars'>Cars</Link>
            </li>
            <li>
              <Link to='/travel'>Travel</Link>
            </li>
            <li>
              <Link to='/law'>Law</Link>
            </li>
            <li>
              <Link to='/video'>Video</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
)

export default Category
