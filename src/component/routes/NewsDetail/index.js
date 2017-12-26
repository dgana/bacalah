import React, { Component } from 'react'

// NewsDetail Component
import Header from '../../common/Header'
import ContainerMain from '../../common/ContainerMain'
import Footer from '../../common/Footer'
import MainContent from '../../common/MainContent'
import SideContent from '../../common/SideContent'
import Breadcrumb from '../../common/Breadcrumb'
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
        <ContainerMain>
          <Breadcrumb path={this.props.location.pathname} />
          <div className="post-container container">
            <MainContent newsDetail>
              <Content />
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

export default NewsDetail
