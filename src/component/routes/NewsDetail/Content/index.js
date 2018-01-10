import React from 'react'
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import Content from './Main'

// gql
import detailNewsQuery from './gql/'
import config from './gql/config'

const DetailNews = ({ data, currentId }) => {

  const { loading, error, news } = data

  if (loading) return (<p>loading...</p>)
  if (error) return (<p>{error.message}</p>)

  return (
    <Content
      newsId={news.id}
      comments={news.comment.map(item => ({
        replies: item.replies.map(replies => ({
          id: replies.id,
          author: replies.user.username,
          date: new Date() + "",
          content: replies.content
        })),
        commentId: item.id,
        author: item.user.username,
        date: new Date() + "",
        content: item.content
      }))}
      currentId={currentId}
      title={news.title}
      author={news.author.username}
      date={new Date()+""}
      commentCount={news.comment.length}
      picture={news.pictures[0].path}
      content={news.content}
    />
  )
}

export default graphql(gql(detailNewsQuery), config)(DetailNews)
