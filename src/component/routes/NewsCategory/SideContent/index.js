import React from 'react'

const SubContent = (props) => (
  <div>


      {/* <div className="widget">
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
      </div> */}

      <div className="widget banner">
        <header className="widget-header">
          <h4 className="title" style={{marginTop: -3, fontSize: 18}}>
            Advertisement
          </h4>
        </header>
        <img src="img/banner_600.jpg" alt="Side Banner" style={{width: '80%'}} />
      </div>

  </div>
)

export default SubContent
