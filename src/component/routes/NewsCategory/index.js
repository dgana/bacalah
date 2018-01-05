import React, { Component } from 'react'

// Category Component
import Header from '../../common/Header'
import ContainerMain from '../../common/ContainerMain'
import Footer from '../../common/Footer'
import MainContent from '../../common/MainContent'
import SideContent from '../../common/SideContent'
import Breadcrumb from '../../common/Breadcrumb'
import Content from './Content'
import SubContent from './SideContent'

// GraphQL
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import categoryListNameQuery from './gql/'

class NewsCategory extends Component {
  render() {
    const { loading, error, categories } = this.props.data

    if (loading) return null
    if (error) return <p>{error.message}</p>

    const currentCategoryName = this.props.match.url.split('/')[1]
    const currentCategoryId = categories.filter(item => item.name.toLowerCase() === currentCategoryName)[0].id

    return (
      <div>
        <Header />
        <ContainerMain>
          <Breadcrumb path={this.props.location.pathname} />
          <div className="post-container container">
            <MainContent newsCategory>
              <Content currentId={currentCategoryId} />
            </MainContent>
            <SideContent>
              <SubContent />
            </SideContent>
          </div>
        </ContainerMain>
        <Footer />
      </div>
    )
  }
}

export default graphql(gql(categoryListNameQuery))(NewsCategory)
