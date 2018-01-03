import React from 'react'
import { Link } from 'react-router-dom'
import gql from 'graphql-tag';
import {
  graphql
} from 'react-apollo';
import findIndex from 'lodash/findIndex';
import Content from './Main'
const categoryListQuery = gql`
query{
  categories{
    id
    name
    news {
      id
      title
      content
      isFeatured
      createdAt
      pictures{
        path
      }
      comment {
        id
      }
    }
  }
}
`;

const CategoryList = ({ data: {loading, error, categories},currentId}) => {
  if (loading) {
    return null
  }
  if (error) {
    console.log('masuk sini')
    return <p>{error.message}</p>;
  }

  const catIdx = currentId ? findIndex(categories, ['id',currentId]) : 0;
  const cat = categories[catIdx];
  return[ 
  <Content 
    key="content-by-cat"
    categories = {categories.map(c => ({
      id: c.id,
      name: c.name
    }))}
    news = {cat.news.map(n => ({
      currentId:currentId,
      id: n.id,
      path : n.pictures[0].path,
      title: n.title,
      content: n.content,
      createdAt: n.createdAt,
      commentCount: n.comment.length,
    }))}
    currentId = {currentId}
    categoryName = {cat.name}
  />
  ]
};

export default graphql(categoryListQuery)(CategoryList);

