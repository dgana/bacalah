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
import { limitString, fullDate } from '../../../../util'

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

  const firstReg = new RegExp(/<p style="text-align:start;">&nbsp;<[/]p>/g)
  const secondReg = new RegExp(/<p>&nbsp;<[/]p>/g)
  const thirdReg = new RegExp(/<br>/g)
  const fourthReg = new RegExp(/&nbsp;/g)
  const fifthReg = new RegExp(/<h1>/g)
  const sixthReg = new RegExp(/<[/]h1>/g)

  const newCategories = categories.map(item => {
    return {
      ...item,
      news: item.news.map(item2 => {
        return {
          ...item2,
          content: item2.content.replace(firstReg, '').replace(secondReg, '').replace(thirdReg, '').replace(fourthReg, '').replace(fifthReg, '').replace(sixthReg, '')
        }
      })
    }
  })

  const randomNumber1 = Math.floor(Math.random() * (newCategories.length))
  const firstCategoryNews = newCategories.slice(randomNumber1, randomNumber1 + 1)
  const slicedCategories = newCategories.filter((item, index) => {
    if (index !== randomNumber1) {
      return {
        ...item
      }
    }
  })

  const randomNumber2 = Math.floor(Math.random() * (slicedCategories.length))
  const secondCategoryNews = slicedCategories.slice(randomNumber2, randomNumber2 + 1)
  const secondSlicedCategories = slicedCategories.filter((item, index) => {
    if (index !== randomNumber2) {
      return {
        ...item
      }
    }
  })

  const randomNumber3 = Math.floor(Math.random() * (secondSlicedCategories.length))
  const thirdCategoryNews = secondSlicedCategories.slice(randomNumber3, randomNumber3 + 1)
  const thirdSlicedCategories = secondSlicedCategories.filter((item, index) => {
    if (index !== randomNumber3) {
      return {
        ...item
      }
    }
  })

  const randomNumber4 = Math.floor(Math.random() * (thirdSlicedCategories.length))
  const fourthCategoryNews = thirdSlicedCategories.slice(randomNumber4, randomNumber4 + 1)
  const fourthSlicedCategories = thirdSlicedCategories.filter((item, index) => {
    if (index !== randomNumber4) {
      return {
        ...item
      }
    }
  })

  const randomNumber5 = Math.floor(Math.random() * (fourthSlicedCategories.length))
  const fifthCategoryNews = fourthSlicedCategories.slice(randomNumber5, randomNumber5 + 1)
  const fifthSlicedCategories = fourthSlicedCategories.filter((item, index) => {
    if (index !== randomNumber5) {
      return {
        ...item
      }
    }
  })

  const randomNumber6 = Math.floor(Math.random() * (fifthSlicedCategories.length))
  const SixCategoryNews = fifthSlicedCategories.slice(randomNumber6, randomNumber6 + 1)

  const popularFirstCategory = firstCategoryNews[0] ? _.maxBy(firstCategoryNews[0].news, 'clickCount') : null
  const popularSecondCategory = _.maxBy(secondCategoryNews[0].news, 'clickCount')
  const popularThirdCategory = _.maxBy(thirdCategoryNews[0].news, 'clickCount')
  const popularFourthCategory = _.maxBy(fourthCategoryNews[0].news, 'clickCount')
  const popularFifthCategory = _.maxBy(fifthCategoryNews[0].news, 'clickCount')
  const popularSixCategory = _.maxBy(SixCategoryNews[0].news, 'clickCount')

  const reversedNews = allNews.map(item => item)

  return (
    <div>
      <div className="widget-thumbnail corousel-wrapper" style={{marginBottom: 12}}>
        <header className="widget-header">
          <h4 className="title" style={{fontSize: 18}}>
            latest news
          </h4>
        </header>
        <Slider {...settings}>
          { reversedNews.reverse().slice(0, 4).map(item => {

            const firstReg = new RegExp(/<p style="text-align:start;">&nbsp;<[/]p>/g)
            const secondReg = new RegExp(/<p>&nbsp;<[/]p>/g)
            const thirdReg = new RegExp(/<br>/g)
            const fourthReg = new RegExp(/&nbsp;/g)
            const fifthReg = new RegExp(/<h1>/g)
            const sixthReg = new RegExp(/<[/]h1>/g)

            const newContent = item.content.replace(firstReg, '').replace(secondReg, '').replace(thirdReg, '').replace(fourthReg, '').replace(fifthReg, '').replace(sixthReg, '')

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
                      <span className="meta"><i className="fa fa-calendar"></i>{fullDate(item.createdAt)}</span>
                      <span className="meta"><i className="fa fa-comment-o"></i>{item.comment.length}</span>
                    </div>
                    <p className="slider-caption" dangerouslySetInnerHTML={{__html: "<div class='content-container'>" + limitString(newContent, 500) + '</div>'}}></p>
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
            <div className="col-md-6 main-content" style={{padding: '0px 16px', maxHeight: 550, overflow: 'hidden'}}>
              <div className="widget">
                <header className="widget-header">
                  <h4 className="title" style={{fontSize: 18}}>
                    {popularFirstCategory.category.name}
                  </h4>
                </header>
                  <div className="widget-thumbnail">
                    <Link to={`/${popularFirstCategory.category.name.toLowerCase()}/${popularFirstCategory.id}`}>
                      <img style={{maxHeight: 200}} src={popularFirstCategory.pictures[0].path} alt="Technology Popular" />
                    </Link>
                  </div>
                  <div className="widget-content" style={{padding: 0}}>
                    <h3 className="title widget-title">
                      <Link style={{fontSize: 22}} to={`/${popularFirstCategory.category.name.toLowerCase()}/${popularFirstCategory.id}`}>
                        {popularFirstCategory.title}
                      </Link>
                    </h3>
                    <div className="meta-wrapper">
                      <span className="meta"><i className="fa fa-calendar"></i>{fullDate(popularFirstCategory.createdAt)}</span>
                      <span className="meta"><i className="fa fa-comment-o"></i>{popularFirstCategory.comment.length}</span>
                    </div>
                    <p dangerouslySetInnerHTML={{__html: "<div class='content-container'>" + limitString(popularFirstCategory.content, 500) + '</div>'}}></p>
                  </div>
              </div>
            </div> : null
          }
          { popularSecondCategory ?
            <div className="col-md-6 main-content" style={{padding: '0px 14px', maxHeight: 550, overflow: 'hidden'}}>
              <div className="widget">
                <header className="widget-header">
                  <h4 className="title" style={{fontSize: 18}}>
                    {popularSecondCategory.category.name}
                  </h4>
                </header>
                <div className="widget-thumbnail">
                  <Link to={`/${popularSecondCategory.category.name.toLowerCase()}/${popularSecondCategory.id}`}>
                    <img style={{maxHeight: 200}} src={popularSecondCategory.pictures[0].path} alt="Health Popular" />
                  </Link>
                </div>
                <div className="widget-content" style={{padding: 0}}>
                  <h3 className="title widget-title">
                    <Link style={{fontSize: 22}} to={`/${popularSecondCategory.category.name.toLowerCase()}/${popularSecondCategory.id}`}>
                      {popularSecondCategory.title}
                    </Link>
                  </h3>
                  <div className="meta-wrapper">
                    <span className="meta"><i className="fa fa-calendar"></i>{fullDate(popularSecondCategory.createdAt)}</span>
                    <span className="meta"><i className="fa fa-comment-o"></i>{popularSecondCategory.comment.length}</span>
                  </div>
                  <p dangerouslySetInnerHTML={{__html: "<div class='content-container'>" + limitString(popularSecondCategory.content, 500) + '</div>'}}></p>
                </div>
              </div>
            </div> : null
          }
          { popularThirdCategory ?
            <div className="col-md-6 main-content" style={{padding: '0px 14px', maxHeight: 550, overflow: 'hidden'}}>
              <div className="widget">
                <header className="widget-header">
                  <h4 className="title" style={{fontSize: 18}}>
                    {popularThirdCategory.category.name}
                  </h4>
                </header>
                <div className="widget-thumbnail">
                  <Link to={`/${popularThirdCategory.category.name.toLowerCase()}/${popularThirdCategory.id}`}>
                    <img style={{maxHeight: 200}} src={popularThirdCategory.pictures[0].path} alt="Health Popular" />
                  </Link>
                </div>
                <div className="widget-content" style={{padding: 0}}>
                  <h3 className="title widget-title">
                    <Link style={{fontSize: 22}} to={`/${popularThirdCategory.category.name.toLowerCase()}/${popularThirdCategory.id}`}>
                      {popularThirdCategory.title}
                    </Link>
                  </h3>
                  <div className="meta-wrapper">
                    <span className="meta"><i className="fa fa-calendar"></i>{fullDate(popularThirdCategory.createdAt)}</span>
                    <span className="meta"><i className="fa fa-comment-o"></i>{popularThirdCategory.comment.length}</span>
                  </div>
                  <p dangerouslySetInnerHTML={{__html: "<div class='content-container'>" + limitString(popularThirdCategory.content, 500) + '</div>'}}></p>
                </div>
              </div>
            </div> : null
          }
          { popularFourthCategory ?
            <div className="col-md-6 main-content" style={{padding: '0px 14px', maxHeight: 550, overflow: 'hidden'}}>
              <div className="widget">
                <header className="widget-header">
                  <h4 className="title" style={{fontSize: 18}}>
                    {popularFourthCategory.category.name}
                  </h4>
                </header>
                <div className="widget-thumbnail">
                  <Link to={`/${popularFourthCategory.category.name.toLowerCase()}/${popularFourthCategory.id}`}>
                    <img style={{maxHeight: 200}} src={popularFourthCategory.pictures[0].path} alt="Health Popular" />
                  </Link>
                </div>
                <div className="widget-content" style={{padding: 0}}>
                  <h3 className="title widget-title">
                    <Link style={{fontSize: 22}} to={`/${popularFourthCategory.category.name.toLowerCase()}/${popularFourthCategory.id}`}>
                      {popularFourthCategory.title}
                    </Link>
                  </h3>
                  <div className="meta-wrapper">
                    <span className="meta"><i className="fa fa-calendar"></i>{fullDate(popularFourthCategory.createdAt)}</span>
                    <span className="meta"><i className="fa fa-comment-o"></i>{popularFourthCategory.comment.length}</span>
                  </div>
                  <p dangerouslySetInnerHTML={{__html: "<div class='content-container'>" + limitString(popularFourthCategory.content, 500) + '</div>'}}></p>
                </div>
              </div>
            </div> : null
          }
          { popularFifthCategory ?
            <div className="col-md-6 main-content" style={{padding: '0px 14px', maxHeight: 550, overflow: 'hidden'}}>
              <div className="widget">
                <header className="widget-header">
                  <h4 className="title" style={{fontSize: 18}}>
                    {popularFifthCategory.category.name}
                  </h4>
                </header>
                <div className="widget-thumbnail">
                  <Link to={`/${popularFifthCategory.category.name.toLowerCase()}/${popularFifthCategory.id}`}>
                    <img style={{maxHeight: 200}} src={popularFifthCategory.pictures[0].path} alt="Health Popular" />
                  </Link>
                </div>
                <div className="widget-content" style={{padding: 0}}>
                  <h3 className="title widget-title">
                    <Link style={{fontSize: 22}} to={`/${popularFifthCategory.category.name.toLowerCase()}/${popularFifthCategory.id}`}>
                      {popularFifthCategory.title}
                    </Link>
                  </h3>
                  <div className="meta-wrapper">
                    <span className="meta"><i className="fa fa-calendar"></i>{fullDate(popularFifthCategory.createdAt)}</span>
                    <span className="meta"><i className="fa fa-comment-o"></i>{popularFifthCategory.comment.length}</span>
                  </div>
                  <p dangerouslySetInnerHTML={{__html: "<div class='content-container'>" + limitString(popularFifthCategory.content, 500) + '</div>'}}></p>
                </div>
              </div>
            </div> : null
          }
          { popularSixCategory ?
            <div className="col-md-6 main-content" style={{padding: '0px 14px', maxHeight: 550, overflow: 'hidden'}}>
              <div className="widget">
                <header className="widget-header">
                  <h4 className="title" style={{fontSize: 18}}>
                    {popularSixCategory.category.name}
                  </h4>
                </header>
                <div className="widget-thumbnail">
                  <Link to={`/${popularSixCategory.category.name.toLowerCase()}/${popularSixCategory.id}`}>
                    <img style={{maxHeight: 200}} src={popularSixCategory.pictures[0].path} alt="Health Popular" />
                  </Link>
                </div>
                <div className="widget-content" style={{padding: 0}}>
                  <h3 className="title widget-title">
                    <Link style={{fontSize: 22}} to={`/${popularSixCategory.category.name.toLowerCase()}/${popularSixCategory.id}`}>
                      {popularSixCategory.title}
                    </Link>
                  </h3>
                  <div className="meta-wrapper">
                    <span className="meta"><i className="fa fa-calendar"></i>{fullDate(popularSixCategory.createdAt)}</span>
                    <span className="meta"><i className="fa fa-comment-o"></i>{popularSixCategory.comment.length}</span>
                  </div>
                  <p dangerouslySetInnerHTML={{__html: "<div class='content-container'>" + limitString(popularSixCategory.content, 500) + '</div>'}}></p>
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
