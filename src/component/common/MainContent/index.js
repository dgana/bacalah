import React from 'react'

const MainContent = (props) => {
  console.log(props.newsDetail)
  const getClassName = props.newsCategory ? 'card-post-format post-view content' :
  props.newsDetail ? 'news-post-format post-view content' : 'main-content'
  return (
    <div className={`col-md-9 ${getClassName}`}>
      <div className="widget">
        { props.children }
      </div>
    </div>
  )
}

export default MainContent
