import React from 'react'

const MainContent = (props) => (
  <div className="col-md-9 main-content">
    <div className="widget">
      { props.children }
    </div>
  </div>
)

export default MainContent
