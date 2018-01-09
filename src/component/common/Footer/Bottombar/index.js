import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => (
  <footer className="site-footer">
    <div className="container footer-view">
      <div className="row">
        <div className="col-md-6 col-sm-6 copyright">
          <span>COPYRIGHT @ PT Media Gemah Ripah </span>
        </div>
        <div className="col-md-6 col-sm-6 footer-link">
          <ul className="menu">
            <li><Link to={"/"}>TENTANG KAMI</Link></li>
            <li>PEDOMAN MEDIA SIBER</li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
