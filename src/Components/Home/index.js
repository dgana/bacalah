import React, { Component } from 'react'

import Topbar from '../../Common/Topbar'
import Category from '../../Common/Category'
import ContainerMain from '../../Common/ContainerMain'
import MenuBottom from '../../Common/MenuBottom'

class Home extends Component {

  render() {
    return (
      <div>
        <Topbar />
        <Category />
        <ContainerMain />
        <MenuBottom />


        <footer className="site-footer">
          <div className="container footer-view">
            <div className="row">

              <div className="col-md-6 col-sm-6 copyright">
                <span>Copyright 2014 © NCC Magazine. </span>
              </div>

              <div className="col-md-6 col-sm-6 footer-link">
                <ul className="menu">
                  <li><a href="#">TERMS OF US</a></li>
                  <li><a href="#">PRIVACY POLICY</a></li>
                </ul>
              </div>

            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default Home
