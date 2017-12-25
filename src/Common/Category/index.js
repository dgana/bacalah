import React from 'react'

const Category = () => (
  <header className="site-header">
    <div className="container">
      <div className="row">
        <div className="col-md-2">
          <h1 className="site-logo title">
            kabarkepri
          </h1>
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#main-menu">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
          </button>
        </div>
        <nav id="main-menu" className="menu-wrapper col-md-10 collapse navbar-collapse">
          <ul className="menu nav navbar-nav">
            <li className="dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown">Technology <i className="fa fa-angle-down"></i></a>
              <ul className="children sub-menu dropdown-menu">
                <li><a href="#">Apps</a></li>
                <li><a href="#">Design & Dev</a></li>
                <li><a href="#">entrepreneur</a></li>
                <li><a href="#">gadgets</a></li>
                <li><a href="#">insider</a></li>
                <li><a href="#">lifehacks</a></li>
                <li><a href="#">media</a></li>
                <li><a href="#">shareables</a></li>
                <li><a href="#">social Media</a></li>
              </ul>
            </li>
            <li><a href="#">Health</a></li>
            <li><a href="#">Money</a></li>
            <li><a href="#">Education</a></li>
            <li><a href="#">Cars</a></li>
            <li><a href="#">Travel</a></li>
            <li><a href="#">Law</a></li>
            <li><a href="#">Video</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
)

export default Category
