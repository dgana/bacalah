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
  return (
    <ul>
      { categories.map(category => <li key={category.id}><Link to={`/${category.name.toLowerCase()}`}>{category.name}</Link></li> )}
    </ul>)
}

const CategoryListWithData = graphql(categoryListQuery)(CategoryList)

class Category extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collapse: false,
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
    console.log(getMarginTop, this.state.width)
    return (
      <header className="site-header">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <Link to='/'>
                <h1 className="site-logo" style={{fontFamily: 'BradleyHand', fontSize: 40, color: 'rgb(244,203,45)', fontWeight: 1000}}>
                  Bacalah
                </h1>
                <p style={{color: 'rgb(30,30,30)'}}>Informasi di tangan anda. maka bacalah...</p>
              </Link>
              <button
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
              className={classNames('menu-wrapper col-md-10 navbar-collapse', { collapse: this.state.collapse })}>
              <ul className="menu nav navbar-nav">
                <CategoryListWithData />
              </ul>
            </nav>

          </div>
        </div>
      </header>
    )
  }
}

export default Category
