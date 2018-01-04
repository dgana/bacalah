import React from 'react'
import { Link } from 'react-router-dom'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

// GraphQL Query
import updateClickCountQuery from './gql/'
import config from './gql/config'

// Content Component
import Pagination from '../Pagination'

// Utility
import { capitalizeFirstLetter, limitString } from '../../../../../util'

const category = ({ id, name }) => (
  <Link className="tag" key={`cat-${id}`} to={`/${name.toLowerCase()}`}>
    {name}
  </Link>
)

const detailNews = ({ categoryName, currentId, id, path, title, content, createdAt, commentCount }) => (
  <div key={id} className="list-item clearfix">
    <div className="list-thumbnail col-md-4">
      <Link key={`catdet-${id}`} to={`/${categoryName.toLowerCase()}/${id}`}><img src={path} alt="no-pic" /></Link>
    </div>
    <div className="list-inner col-md-8">
      <h4 className="title">
        <Link key={`catdet2-${id}`} to={`/${categoryName.toLowerCase()}/${id}`}>{title}</Link>
      </h4>
      <div className="meta-wrapper">
         <span className="meta"><i className="fa fa-calendar"></i>{createdAt}</span>
         <span className="meta"><i className="fa fa-comment-o"></i>{commentCount}</span>
       </div>
      <p>{limitString(content, 350)}</p>
    </div>
  </div>
)

class Main extends React.Component {

  render() {
    const { categories, latestNews, news, categoryName, currentId, submit, mutate } = this.props

    // if (loading) return (<p>Loading...</p>)
    // if (error) return (<p>{error.message}</p>)
    console.log(this.props)
    console.log(submit)
    console.log(mutate)

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
        { latestNews ?
          <div className="feature-view">
            <div className="card-thumbnail" onClick={() => alert('jbrng5az', 1)}>
              <Link key={`catdet-${latestNews.id}`} to={`/${categoryName.toLowerCase()}/${latestNews.id}`}>
                <img src={latestNews.pictures[0].path} alt="Latest News" />
                <div className="card-meta">
                  <ul className="list">
                    <li style={{color: 'rgb(40,40,40)'}}><i className="fa fa-comment"></i>{latestNews.comment.length}</li>
                  </ul>
                </div>
              </Link>
            </div>
            <div className="col-inner">
               <h4 className="title">
                 <Link key={`catdet-${latestNews.id}`} to={`/${categoryName.toLowerCase()}/${latestNews.id}`}>{latestNews.title}</Link>
               </h4>
               <p>{limitString(latestNews.content, 500)}</p>
             </div>
          </div> : null
        }
        <div className="post margin-top-20 clearfix">
          <div className="row">
            {news.map(detailNews)}
          </div>

          <Pagination />

        </div>
      </div>
    )
  }

}

// onClick={() => submit('jbrng5az', 1)
// onClick={() => {
//   // Mutate function passed via props
//   mutate({
//     variables: {
//       id: "jbrng5az",
//       clickCount: 1
//     }
//   })
// }}

export default graphql(gql(updateClickCountQuery), config)(Main)
