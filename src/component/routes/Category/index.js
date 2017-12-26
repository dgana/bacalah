import React, { Component } from 'react'

// Category Component
import Header from '../../common/Header'
import ContainerMain from '../../common/ContainerMain'
import Footer from '../../common/Footer'
import MainContent from '../../common/MainContent'
import SideContent from '../../common/SideContent'
import Content from './Content'
import SubContent from './SubContent'

class Category extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Header />
        <ContainerMain MainAds>
          <div className="breadcrumb-wrapper">
            <ol className="breadcrumb">
              <li><a href="#">Home</a></li>
              <li className="active">Travel</li>
            </ol>
          </div>
          <MainContent>
            <Content match={this.props.match} />
          </MainContent>
          <SideContent>
            <SubContent />
          </SideContent>
        </ContainerMain>
        <Footer />
      </div>
    )
  }
}

export default Category
