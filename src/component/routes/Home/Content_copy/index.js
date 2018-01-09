import React from 'react'
import { Link } from 'react-router-dom'

// GraphQL
import gql from 'graphql-tag'
import { graphql, compose } from 'react-apollo'
import { allNewsQuery, categoriesQuery } from './gql/'
import { allNewsConfig, categoriesConfig } from './gql/config'

// Plugin Dependencies
import Slider from 'react-slick'
import _ from 'lodash'

// Utility
import { limitString } from '../../../../util'

const settings = {
  // dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

const Content = (props) => {

  // console.log(props)

  const { loading, error, allNews, newsByCategory } = props.data

  if (loading) return (<p>Loading...</p>)
  if (error) return (<p>{error.message}</p>)

  const popularTechnologyNewsByCategory = _.maxBy(newsByCategory, 'clickCount')
  const popularHealthNewsByCategory = _.maxBy(props.healthCategory.newsByCategory, 'clickCount')

  return (
    <div>
      <div className="widget-thumbnail corousel-wrapper" style={{marginBottom: 12}}>
        <header className="widget-header">
          <h4 className="title">
            latest news
          </h4>
        </header>
        <Slider {...settings}>
          { allNews.slice(0, 4).map(item => {
              return (
                <div key={item.id}>
                  <Link to={`/${item.category.name.toLowerCase()}/${item.id}`}><img src={item.pictures[0].path} alt="Feature News" /></Link>
                  <div className="caption-block">
                    <Link to={`/${item.category.name.toLowerCase()}/${item.id}`}>
                      <h3 className="title widget-title">
                        {item.title}
                      </h3>
                    </Link>
                    <div className="meta-wrapper">
                      <span className="meta"><i className="fa fa-calendar"></i>{item.createdAt}</span>
                      <span className="meta"><i className="fa fa-comment-o"></i>{item.comment.length}</span>
                    </div>
                    <p className="slider-caption">{limitString(item.content, 500)}</p>
                  </div>
                </div>
              )
            })
          }
        </Slider>
      </div>
      <div className="row" style={{margin: 0}}>
        <div className="col-md-12" style={{background: 'white'}}>
          <div className="col-md-6 main-content" style={{padding: '0px 16px'}}>
            <div className="widget">
              <header className="widget-header">
                <h4 className="title">
                  Technology
                </h4>
              </header>
                <div className="widget-thumbnail">
                  <Link to={`/${popularTechnologyNewsByCategory.category.name.toLowerCase()}/${popularTechnologyNewsByCategory.id}`}>
                    <img src={popularTechnologyNewsByCategory.pictures[0].path} alt="Technology Popular" />
                  </Link>
                </div>
                <div className="widget-content">
                  <h3 className="title widget-title" style={{fontSize: 20}}>
                    <Link to={`/${popularTechnologyNewsByCategory.category.name.toLowerCase()}/${popularTechnologyNewsByCategory.id}`}>
                      {popularTechnologyNewsByCategory.title}
                    </Link>
                  </h3>
                  <div className="meta-wrapper">
                    <span className="meta"><i className="fa fa-calendar"></i>{popularTechnologyNewsByCategory.createdAt}</span>
                    <span className="meta"><i className="fa fa-comment-o"></i>{popularTechnologyNewsByCategory.comment.length}</span>
                  </div>
                  <p>{limitString(popularTechnologyNewsByCategory.content, 350)}</p>
                </div>
            </div>
          </div>
          { popularHealthNewsByCategory ?
            <div className="col-md-6 main-content" style={{padding: '0px 30px'}}>
              <div className="widget">
                <header className="widget-header">
                  <h4 className="title">
                    health
                  </h4>
                </header>
                <div className="widget-thumbnail">
                  <Link to={`/${popularHealthNewsByCategory.category.name.toLowerCase()}/${popularHealthNewsByCategory.id}`}>
                    <img src={popularHealthNewsByCategory.pictures[0].path} alt="Health Popular" />
                  </Link>
                </div>
                <div className="widget-content">
                  <h3 className="title widget-title" style={{fontSize: 20}}>
                    <Link to={`/${popularHealthNewsByCategory.category.name.toLowerCase()}/${popularHealthNewsByCategory.id}`}>
                      {popularHealthNewsByCategory.title}
                    </Link>
                  </h3>
                  <div className="meta-wrapper">
                    <span className="meta"><i className="fa fa-calendar"></i>{popularHealthNewsByCategory.createdAt}</span>
                    <span className="meta"><i className="fa fa-comment-o"></i>{popularHealthNewsByCategory.comment.length}</span>
                  </div>
                  <p>{limitString(popularHealthNewsByCategory.content, 350)}</p>
                </div>
              </div>
            </div> : null
          }
        </div>
      </div>
    </div>
  )
}

export default compose(
  graphql(gql(allNewsQuery), allNewsConfig),
  graphql(gql(categoriesQuery), categoriesConfig)
)(Content)
