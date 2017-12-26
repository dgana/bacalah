import React, { Component } from 'react'

// Home Component
import Header from '../../common/Header'
import ContainerMain from '../../common/ContainerMain'
import Footer from '../../common/Footer'
import MainContent from '../../common/MainContent'
import SideContent from '../../common/SideContent'
import Content from './Content'
import SubContent from './SubContent'

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Header />
        <ContainerMain MainAds>
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

export default Home
