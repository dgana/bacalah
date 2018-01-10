import React, { Component } from 'react'

// Home Component
import Header from '../../common/Header'
import ContainerMain from '../../common/ContainerMain'
import Footer from '../../common/Footer'
import MainContent from '../../common/MainContent'
import SideContent from '../../common/SideContent'
import Content from './Content'
import SubContent from './SideContent'

class CreateNews extends Component {
  render() {
    return (
      <div>
        <Header />
          <ContainerMain>
            <div className="post-container container">
              <MainContent>
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

export default CreateNews
