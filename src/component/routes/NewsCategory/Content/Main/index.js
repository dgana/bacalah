import React from 'react'
import { Link } from 'react-router-dom'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

// GraphQL Query
import updateClickCountQuery from './gql/'
import config from './gql/config'

// Content Component
// import Pagination from './Pagination'

// Utility
import { capitalizeFirstLetter, limitString } from '../../../../../util'

const category = ({ id, name }) => (
  <Link className="tag" key={`cat-${id}`} to={`/${name.toLowerCase()}`}>
    {name}
  </Link>
)

class DetailNews extends React.Component {
  componentDidMount() {
    this.refs.contentRefs.innerHTML = limitString(this.props.news.content, 350) + this.refs.contentRefs.innerHTML
  }

  render() {
    const { categoryName, currentId, id, path, title, content, createdAt, commentCount, submit } = this.props.news
    return (
      <div key={id} className="list-item clearfix">
        <div className="list-thumbnail col-md-4">
          <Link onClick={() => submit(id)} key={`catdet-${id}`} to={`/${categoryName.toLowerCase()}/${id}`}><img src={path} alt="no-pic" /></Link>
        </div>
        <div className="list-inner col-md-8">
          <h4 className="title">
            <Link onClick={() => submit(id)} key={`catdet2-${id}`} to={`/${categoryName.toLowerCase()}/${id}`}>{title}</Link>
          </h4>
          <div className="meta-wrapper">
             <span className="meta"><i className="fa fa-calendar"></i>{createdAt}</span>
             <span className="meta"><i className="fa fa-comment-o"></i>{commentCount}</span>
           </div>
           <div ref="contentRefs"></div>
        </div>
      </div>
    )
  }
}

class Main extends React.Component {
  componentDidMount() {
    if(this.props.latestNews) {
      this.refs.contentRefs.innerHTML = limitString(this.props.latestNews.content, 350) + this.refs.contentRefs.innerHTML
    }
  }

  render() {
    const { categories, latestNews, news, categoryName, submit, loading, error } = this.props

    if (loading) return (<p>Loading...</p>)
    if (error) return (<p>{error.message}</p>)

    const news2 = news.map(item => {
      return {
        ...item,
        submit
      }
    })

    return (
      <div className="post clearfix">
        <header className="page-header">
          <div className="page-title">
            <h2 className="title" style={{fontSize: 26}}>{capitalizeFirstLetter(categoryName)}</h2>
          </div>
        </header>
        <div className="margin-bottom-10">
          {categories.map(category)}
        </div>
        { latestNews ?
          <div className="feature-view">
            <div className="card-thumbnail">
              <Link onClick={() => submit(latestNews.id)} key={`catdet-${latestNews.id}`} to={`/${categoryName.toLowerCase()}/${latestNews.id}`}>
                <img src={latestNews.pictures[0].path} alt="Latest News" />
                <div className="card-meta">
                  <ul className="list">
                    <li style={{color: 'rgb(40,40,40)'}}><i className="fa fa-comment"></i>{latestNews.comment.length}</li>
                  </ul>
                </div>
              </Link>
            </div>
            <div className="col-inner">
               <h4 className="title" style={{fontSize: 20}}>
                 <Link key={`catdet-${latestNews.id}`} to={`/${categoryName.toLowerCase()}/${latestNews.id}`}>{latestNews.title}</Link>
               </h4>
              <div ref="contentRefs"></div>
             </div>
          </div> : null
        }
        <div className="post margin-top-20 clearfix">
          <div className="row">
            { news2.length !== 0 ?
              news2.map(item => {
                return (
                  <DetailNews news={item} />
                )
              }) : null
            }
          </div>

          {/* <Pagination /> */}

        </div>
      </div>
    )
  }
}

export default graphql(gql(updateClickCountQuery), config)(Main)
