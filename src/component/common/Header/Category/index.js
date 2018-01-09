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

const CategoryList = ({ data: { loading, error, categories }}) => {
  if (loading) return (<p>Loading ...</p>)
  if (error) return (<p>{error.message}</p>)
  return categories.map(category => <li key={category.id}><Link to={`/${category.name.toLowerCase()}`}>{category.name}</Link></li> )
}


const CategoryListWithData = graphql(categoryListQuery)(CategoryList)

class Category extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collapse: true,
      width: 1200
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this._updateWindowDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._updateWindowDimensions)
  }

  _updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth })
  }

  render() {
    const getMarginTop = this.state.width < 751 ? 12 : 12

    return (
      <header className="site-header">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <Link to='/'>
                <h1 className="site-logo" style={{fontFamily: 'AmericanTypewriter', fontSize: 50, color: 'rgb(244,203,45)', fontWeight: 1000}}>
                  Bacalah.co
                </h1>
                <p style={{fontFamily: 'BradleyHand', color: 'rgb(30,30,30)', fontSize: 14}}>Informasi di tangan anda, maka bacalah...</p>
              </Link>
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
              style={{marginTop: getMarginTop}}
              id="main-menu"
              className={classNames('menu-wrapper col-md-9 navbar-collapse', { collapse: this.state.collapse })}>
              <ul className="menu nav navbar-nav">
                <ul>
                  <CategoryListWithData />
                  <li><Link to={'/'}>Tentang Kami</Link></li>
                </ul>
              </ul>
            </nav>

          </div>
        </div>
      </header>
    )
  }
}

export default Category
