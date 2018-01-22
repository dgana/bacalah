import React, { Component } from 'react'

// NewsDetail Component
import Header from '../../common/Header'
import ContainerMain from '../../common/ContainerMain'
import Footer from '../../common/Footer'
import MainContent from '../../common/MainContent'
import SideContent from '../../common/SideContent'
import Breadcrumb from '../../common/Breadcrumb'
import Content from './Content'
import SubContent from './SideContent'

// GraphQL
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import query from './gql/'
import config from './gql/config'

class NewsDetail extends Component {
  render() {
    const { loading, error, news } = this.props.data
    if (error) return (<p>{error.message}</p>)
    return (
      <div>
        <Header />
        <ContainerMain>
          <Breadcrumb path={this.props.location.pathname} />
          <div className="post-container container">
            <MainContent newsDetail>
              <Content currentId={this.props.match.params.newsDetailId} />
            </MainContent>
            <SideContent>
              <div className="widget banner">
                <header className="widget-header">
                  <h4 className="title" style={{marginTop: -3}}>
                    Advertisement
                  </h4>
                </header>
                <img src="../img/banner_250.jpg" alt="Side Banner" />
              </div>
              { loading ?
                <p>Loading...</p> :
                news ?
                <SubContent categoryId={news.category.id} /> : null
              }
            </SideContent>
          </div>
        </ContainerMain>
        <Footer />
      </div>
    )
  }
}

export default graphql(gql(query), config)(NewsDetail)
