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

// Plugin Dependencies
import _ from 'lodash'

// Utility
import { capitalizeFirstLetter } from '../../../util'

class NewsDetail extends Component {
  render() {
    const { loading, error, news } = this.props.data

    if (loading) return (<p>Loading...</p>)
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
              <SubContent categoryId={news.category.id} />
            </SideContent>
          </div>
        </ContainerMain>
        <Footer />
      </div>
    )
  }
}

export default graphql(gql(query), config)(NewsDetail)
