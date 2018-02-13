import React from 'react'
import { Link } from 'react-router-dom'

// GraphQL
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'
import { newsQuery } from './gql/'
import { newsConfig } from './gql/config'

// Plugin Dependencies
import _ from 'lodash'

// Utility
import { limitString } from '../../../../util'

class SubContent extends React.Component {

  render() {
    const sortedPopularNews = _.sortBy(this.props.popularNews.newsByCategory, 'clickCount').reverse().slice(0,5)
    return (
      <div>
        {/* <div className="widget">
          <header className="widget-header">
            <h4 className="title">
              Tagged with
            </h4>
          </header>
          <div className="widget-content meta-tag">
            <div className="margin-top-20">
              <a className="tag" href="">Cold War</a>
              <a className="tag" href="">Russian Revolution</a>
              <a className="tag" href="">Czechoslovakia</a>
            </div>
          </div>
        </div> */}

        <div className="widget">
          <header className="widget-header">
            <h4 className="title" style={{fontSize: 18}}>
              MOST POPULAR
            </h4>
          </header>
          <div className="margin-top-20">
            <ul className="media-list list">
              { sortedPopularNews.map(item => {
                return (
                  <li key={item.id} className="media">
                    <div className="title margin-bottom-10">
                      <Link style={{fontSize: 22}} to={`/${item.category.name.toLowerCase()}/${item.id}`}>{item.title}</Link>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <Link to={`/${item.category.name.toLowerCase()}/${item.id}`} className="pull-left">
                          <img src={item.pictures[0].path} alt="Popular News" className="media-object" />
                        </Link>
                      </div>
                      <div className="col-md-6" style={{paddingLeft: 16}}>
                        <div dangerouslySetInnerHTML={{__html: "<div class='content-container'>" + limitString(item.content, 200) + '</div>'}}></div>
                      </div>
                    </div>
                  </li>
                )
              })
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default compose(
  // graphql(gql(categoriesQuery), categoriesConfig),
  graphql(gql(newsQuery), newsConfig)
)(SubContent)
