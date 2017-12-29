import React from 'react'
import gql from 'graphql-tag';
import { Link } from 'react-router-dom'
import {
  graphql
} from 'react-apollo';
const categoryListQuery = gql`
query {
  categories {
    id
    name
  }
}
`;
const CategoryList = ({ data: {loading, error, categories }}) => {
  if (loading) {
    return <p>Loading ...</p>;
  }
  if (error) {
    console.log('masuk sini')
    return <p>{error.message}</p>;
  }
  return <ul>
    { categories.map( cat => <li key={cat.id}><Link to={`/${cat.id}`}>{cat.name}</Link></li> ) }
  </ul>;
};

const CategoryListWithData = graphql(categoryListQuery)(CategoryList);

const Category = (props) => (
  <header className="site-header">
    <div className="container">
      <div className="row">
        <div className="col-md-2">
          <Link to='/'>
            <h1 className="site-logo title">
              kabarkepri
            </h1>
          </Link>
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="main-menu">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
          </button>
        </div>
        <nav id="main-menu" className="menu-wrapper col-md-10 collapse navbar-collapse">
          <ul className="menu nav navbar-nav">
            <CategoryListWithData />
          </ul>
        </nav>
      </div>
    </div>
  </header>
)

export default Category
