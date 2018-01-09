import React from 'react'
import { Link } from 'react-router-dom'

// GraphQL
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { allNewsQuery } from './gql/'
import { allNewsConfig } from './gql/config'

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
  const { loading, error, allNews, categories } = props.data

  if (loading) return (<p>Loading...</p>)
  if (error) return (<p>{error.message}</p>)

  const randomNumber1 = Math.floor(Math.random() * (categories.length))
  const firstCategoryNews = categories.slice(randomNumber1, randomNumber1 + 1)
  const slicedCategories = categories.filter((item, index) => {
    if (index !== randomNumber1) {
      return {
        ...item
      }
    }
  })
  const randomNumber2 = Math.floor(Math.random() * (slicedCategories.length))
  const secondCategoryNews = slicedCategories.slice(randomNumber2, randomNumber2 + 1)

  const popularFirstCategory = _.maxBy(firstCategoryNews[0].news, 'clickCount')
  const popularSecondCategory = _.maxBy(secondCategoryNews[0].news, 'clickCount')

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
          { popularFirstCategory ?
            <div className="col-md-6 main-content" style={{padding: '0px 16px'}}>
              <div className="widget">
                <header className="widget-header">
                  <h4 className="title">
                    {popularFirstCategory.category.name}
                  </h4>
                </header>
                  <div className="widget-thumbnail">
                    <Link to={`/${popularFirstCategory.category.name.toLowerCase()}/${popularFirstCategory.id}`}>
                      <img src={popularFirstCategory.pictures[0].path} alt="Technology Popular" />
                    </Link>
                  </div>
                  <div className="widget-content" style={{padding: 0}}>
                    <h3 className="title widget-title" style={{fontSize: 20}}>
                      <Link to={`/${popularFirstCategory.category.name.toLowerCase()}/${popularFirstCategory.id}`}>
                        {popularFirstCategory.title}
                      </Link>
                    </h3>
                    <div className="meta-wrapper">
                      <span className="meta"><i className="fa fa-calendar"></i>{popularFirstCategory.createdAt}</span>
                      <span className="meta"><i className="fa fa-comment-o"></i>{popularFirstCategory.comment.length}</span>
                    </div>
                    <p>{limitString(popularFirstCategory.content, 350)}</p>
                  </div>
              </div>
            </div> : null
          }
          { popularSecondCategory ?
            <div className="col-md-6 main-content" style={{padding: '0px 14px'}}>
              <div className="widget">
                <header className="widget-header">
                  <h4 className="title">
                    {popularSecondCategory.category.name}
                  </h4>
                </header>
                <div className="widget-thumbnail">
                  <Link to={`/${popularSecondCategory.category.name.toLowerCase()}/${popularSecondCategory.id}`}>
                    <img src={popularSecondCategory.pictures[0].path} alt="Health Popular" />
                  </Link>
                </div>
                <div className="widget-content" style={{padding: 0}}>
                  <h3 className="title widget-title" style={{fontSize: 20}}>
                    <Link to={`/${popularSecondCategory.category.name.toLowerCase()}/${popularSecondCategory.id}`}>
                      {popularSecondCategory.title}
                    </Link>
                  </h3>
                  <div className="meta-wrapper">
                    <span className="meta"><i className="fa fa-calendar"></i>{popularSecondCategory.createdAt}</span>
                    <span className="meta"><i className="fa fa-comment-o"></i>{popularSecondCategory.comment.length}</span>
                  </div>
                  <p>{limitString(popularSecondCategory.content, 350)}</p>
                </div>
              </div>
            </div> : null
          }

        </div>
      </div>
    </div>
  )
}

export default graphql(gql(allNewsQuery), allNewsConfig)(Content)
