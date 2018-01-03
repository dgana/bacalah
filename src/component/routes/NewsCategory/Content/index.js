import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import findIndex from 'lodash/findIndex'
import Content from './Main'
import categoryListQuery from './gql/'

const CategoryList = ({ data: {loading, error, categories}, currentId}) => {
  if (loading) return null
  if (error) return <p>{error.message}</p>

  const catIdx = currentId ? findIndex(categories, ['id', currentId]) : 0
  const category = categories[catIdx]

  return (
    <Content
      categories={categories.map(item => ({
        id: item.id,
        name: item.name
      }))}
      news={category.news.map(item => ({
        currentId: currentId,
        id: item.id,
        path : item.pictures[0].path,
        title: item.title,
        content: item.content,
        createdAt: item.createdAt,
        commentCount: item.comment.length,
      }))}
      currentId={currentId}
      categoryName = {category.name}
    />
  )
}

export default graphql(gql(categoryListQuery))(CategoryList)
