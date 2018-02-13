import React from 'react'
import gql from 'graphql-tag'
import { Link } from 'react-router-dom'
import { graphql } from 'react-apollo'
import classNames from 'classnames'

const categoryListQuery = gql`
query {
  categories {
    id
    name
  }
}
`

const CategoryList = ({ data, padding }) => {
  const { loading, error, categories } = data
  if (loading) return (<p>Loading ...</p>)
  if (error) return (<p>{error.message}</p>)
  return categories.map(category => (
    <li key={category.id}>
      <Link to={`/${category.name.toLowerCase()}`} style={{padding, color: 'white'}}>{category.name}</Link>
    </li>
  ))
}

class Category extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collapse: true,
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
    this.setState({ width: window.innerWidth })
  }

  render() {
    // const marginTop = this.state.width < 751 ? 0 : 24
    const marginTop = this.state.width < 1200 ? 8 : 22
    const paddingTop = this.state.width < 1200 ? 12 : 0
    const getCategoryPadding = this.state.width < 1200 ? '6px' : '0px 15px'
    const { width } = this.state

    const getHeight = width < 768 ? 'auto' : width < 997 ? 200 : 120
    const getJustify =  width < 768 ? 'left' : width < 997 ? 'center' : 'left'
    return (
      <header className="site-header" style={{borderBottom: 'none', background: 'rgb(50,50,50)', height: getHeight}}>
        <div className="container">
          <div className="row">
            <div className="col-md-4" style={{display: 'flex', justifyContent: getJustify}}>
              { width < 600 ?
                <Link to='/'>
                  <div style={{height: 80, width: 200, background: 'rgb(207,0,0)', padding: '0px 12px', borderRadius: 2}}>
                    <h1 className="site-logo" style={{fontFamily: 'montserrat', letterSpacing: '1px', fontSize: 32, color: 'rgb(250,250,250)', fontWeight: 1000}}>
                      Bacalah.co
                    </h1>
                    <p style={{fontFamily: 'BradleyHand', display: 'flex', justifyContent: getJustify, color: 'white', fontSize: 10, fontWeight: 700}}>Informasi di tangan anda, maka bacalah...</p>
                  </div>
                </Link> :
                width < 997 ?
                <Link to='/'>
                  <div style={{height: 110, width: 300, background: 'rgb(207,0,0)', padding: '20px 24px', borderRadius: 2}}>
                    <h1 className="site-logo" style={{fontFamily: 'montserrat', letterSpacing: '1px', fontSize: 45, color: 'rgb(250,250,250)', fontWeight: 1000}}>
                      Bacalah.co
                    </h1>
                    <p style={{fontFamily: 'BradleyHand', display: 'flex', justifyContent: getJustify, color: 'white', fontSize: 13, fontWeight: 700}}>Informasi di tangan anda, maka bacalah...</p>
                  </div>
                </Link>
                :
                <Link to='/'>
                  <div style={{height: 110, width: 300, background: 'rgb(207,0,0)', position: 'absolute', padding: '20px 24px', display: 'inline-block', borderRadius: 2}}>
                    <h1 className="site-logo" style={{fontFamily: 'montserrat', letterSpacing: '1px', fontSize: 45, color: 'rgb(250,250,250)', fontWeight: 1000}}>
                      Bacalah.co
                    </h1>
                    <p style={{fontFamily: 'BradleyHand', color: 'white', fontSize: 13, fontWeight: 700}}>Informasi di tangan anda, maka bacalah...</p>
                  </div>
                </Link>
              }

              <button
                style={{position: 'absolute', top: 20, right: 20}}
                onClick={() => this.setState(prevState => ({ collapse: prevState.collapse ? false : true }))}
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="main-menu">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
              </button>
            </div>
            <nav
              style={{marginTop, paddingTop}}
              id="main-menu"
              className={classNames('menu-wrapper col-md-8 navbar-collapse', { collapse: this.state.collapse })}>
              <ul className="menu nav navbar-nav">
                <ul>
                  <CategoryList data={this.props.data} padding={getCategoryPadding} />
                  {/* <li><Link to={'/'} style={{padding: getCategoryPadding, color: 'white'}}>Tentang Kami</Link></li> */}
                </ul>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    )
  }
}

export default graphql(categoryListQuery)(Category)
