import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import categoryListNameQuery from './gql/'

// Category Component
import Header from '../../common/Header'
import ContainerMain from '../../common/ContainerMain'
import Footer from '../../common/Footer'
import MainContent from '../../common/MainContent'
import SideContent from '../../common/SideContent'
import Breadcrumb from '../../common/Breadcrumb'
import Content from './Content'
import SubContent from './SubContent'

class Category extends Component {
  render() {
    console.log(this.props)
    const { loading, error, categories } = this.props.data

    if (loading) return null
    if (error) return <p>{error.message}</p>

    const currentId = categories.filter(item => item.name.toLowerCase() === this.props.match.url.split('/')[1])[0].id
    return (
      <div>
        <Header />
        <ContainerMain>
          <Breadcrumb path={this.props.location.pathname} />
          <div className="post-container container">
            <MainContent newsCategory>
              <Content currentId={currentId} />
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

export default graphql(gql(categoryListNameQuery))(Category)
