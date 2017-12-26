import React from 'react'

const SubContent = (props) => (
  <div>


      <div className="widget">
        <header className="widget-header">
          <h4 className="title">
            TRENDING NOW
          </h4>
        </header>
        <ul className="media list">
          <li className="media">
            <div className="widget-thumbnail">
              <img src="img/9.jpg" alt="" />
            </div>
            <div className="media-body margin-top-10">
              <h4 className="media-heading title">
                <a href="">Not your average steering wheel</a>
              </h4>
              <p>Explore our interactive of one of F1's most important and complicated pieces of kit.</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="widget">
        <header className="widget-header">
          <h4 className="title">
            Advertisement
          </h4>
        </header>
        <div className="widget-content">
          <ul className="list list-view">
            <li><a href="">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </a></li>
            <li><a href="">  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.</a></li>
          </ul>
        </div>
      </div>

  </div>
)

export default SubContent
