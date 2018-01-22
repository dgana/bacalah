import React from 'react'
import { Link } from 'react-router-dom'

// GraphQL
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import query from './gql/'
import config from './gql/config'

// Plugin Dependencies
import _ from 'lodash'

// Utility
import { limitString } from '../../../../util'

const SubContent = (props) => {
  const { loading, error, allNews } = props.data

  if (error) return (<p>{error.message}</p>)

  const sortedPopularNews = _.sortBy(allNews, 'clickCount').reverse().slice(0,5)

  return (
    <div>
      <div className="widget banner">
        <header className="widget-header">
          <h4 className="title" style={{marginTop: -3}}>
            Advertisement
          </h4>
        </header>
        <img src="img/banner_250.jpg" alt="" />
      </div>
      <div className="widget">
        <header className="widget-header">
          <h4 className="title">
            MOST POPULAR
          </h4>
        </header>
        { loading ?
          <p>Loading...</p> :
          <div className="margin-top-20">
            <ul className="media-list list">
              { sortedPopularNews.map(item => {
                return (
                  <li key={item.id} className="media">
                    <div className="title margin-bottom-10">
                      <Link to={`/${item.category.name.toLowerCase()}/${item.id}`}>{item.title}</Link>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <Link to={`/${item.category.name.toLowerCase()}/${item.id}`} className="pull-left">
                          <img src={item.pictures[0].path} alt="Popular News" className="media-object" />
                        </Link>
                      </div>
                      <div className="col-md-6" style={{paddingLeft: 0}}>
                        <p className="small" dangerouslySetInnerHTML={{__html: limitString(item.content, 150)}}></p>
                      </div>
                    </div>
                  </li>
                )
              })
              }
            </ul>
          </div>
        }
      </div>
    </div>
  )
}

export default graphql(gql(query), config)(SubContent)
