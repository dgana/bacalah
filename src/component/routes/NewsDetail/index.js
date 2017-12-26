import React, { Component } from 'react'

// NewsDetail Component
import Header from '../../common/Header'
import ContainerMain from '../../common/ContainerMain'
import Footer from '../../common/Footer'
import MainContent from '../../common/MainContent'
import SideContent from '../../common/SideContent'
import Content from './Content'
import SubContent from './SubContent'

class NewsDetail extends Component {
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
              <li><a href="#">Blog</a></li>
              <li class="active">Single Post</li>
            </ol>
          </div>
          <MainContent>
            <Content />
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

export default NewsDetail
