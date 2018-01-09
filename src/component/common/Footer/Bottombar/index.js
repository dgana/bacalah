import React from 'react'
import { Link } from 'react-router-dom'

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0
    }
  }

  componentDidMount() {
    this._updateWindowDimensions()
    window.addEventListener('resize', this._updateWindowDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._updateWindowDimensions)
  }

  _updateWindowDimensions = () => {
    this.setState({
      width: window.innerWidth
    })
  }

  render() {
    const { width } = this.state
    return (
      <footer className="site-footer">
        <div className="container footer-view">
          <div className="row">
            { width < 768 ?
              <div>
                <div className="col-md-6 col-sm-6 footer-link">
                  <ul className="menu">
                    <li><Link to={"/"}>TENTANG KAMI</Link></li>
                    <li>PEDOMAN MEDIA SIBER</li>
                  </ul>
                </div>
                <div className="col-md-6 col-sm-6 copyright">
                  <span>COPYRIGHT @ PT Media Gemah Ripah </span>
                </div>
              </div> :
              <div>
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
            }
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
