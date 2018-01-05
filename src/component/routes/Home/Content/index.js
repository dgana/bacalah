import React from 'react'
import { Link } from 'react-router-dom'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import allNewsQuery from './gql/'

// Plugin Dependencies
import Slider from 'react-slick'

// Utility
import { limitString } from '../../../../util'

const settings = {
  // dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

const Content = ({ data: { loading, error, allNews }}) => {

  if (loading) return (<p>Loading...</p>)
  if (error) return (<p>{error.message}</p>)

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
                <div>
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

      <div className="row">
      <div className="col-md-12" style={{background: 'white'}}>
      <div className="col-md-6 main-content">
        <div className="widget">
          <header className="widget-header">
            <h4 className="title">
              Technology
            </h4>
          </header>
            <div className="widget-thumbnail">
              <img src="img/9.jpg" alt="" />
            </div>
            <div className="widget-content">
              <h3 className="title widget-title">
                Buying Into Obamacare
              </h3>
              <p>A health writer tries to buy insurance on an Obamacare exchange and confronts the good, the bad and the ugly of the new health insurance marketplace.</p>
            </div>
            <div className="related-content box">
              <div className="inner">
                <ul className="list list-view">
                  <li><a href="">U.S. Grouped With Powerhouse Germany in World Cup 2014 Draw</a></li>
                  <li><a href="">Seahawks clinch top seed with 27-9 win over Rams</a></li>
                  <li><a href="">Blount leads Pats to bye with 34-20 win over Bills</a></li>
                </ul>
              </div>
            </div>
        </div>
      </div>
      <div className="col-md-6 main-content">
        <div className="widget">
          <header className="widget-header">
            <h4 className="title">
              health
            </h4>
          </header>
          <div className="widget-thumbnail">
            <img src="img/7.jpg" alt="" />
          </div>
          <div className="widget-content">
            <h3 className="title widget-title">
              Buying Into Obamacare
            </h3>
            <p>A health writer tries to buy insurance on an Obamacare exchange and confronts the good, the bad and the ugly of the new health insurance marketplace.</p>
          </div>
          <div className="related-content box">
            <div className="inner">
              <ul className="list list-view">
                <li><a href="">U.S. Grouped With Powerhouse Germany in World Cup 2014 Draw</a></li>
                <li><a href="">Seahawks clinch top seed with 27-9 win over Rams</a></li>
                <li><a href="">Blount leads Pats to bye with 34-20 win over Bills</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default graphql(gql(allNewsQuery))(Content)
