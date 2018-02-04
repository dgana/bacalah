import React from 'react'
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import Content from './Main'

// gql
import detailNewsQuery from './gql/'
import config from './gql/config'

const DetailNews = ({ data, currentId, path }) => {

  const { loading, error, news } = data

  if (loading) return (<p>loading...</p>)
  if (error) return (<p>{error.message}</p>)

  return (
    <div>
    { news ?
      <Content
        path={path}
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
        pictureDetail={news.pictureDetail}
        currentId={currentId}
        title={news.title}
        author={news.author.username}
        date={new Date()+""}
        commentCount={news.comment.length}
        picture={news.pictures[0].path}
        content={news.content}
      /> : null
    }
    </div>
  )
}

export default graphql(gql(detailNewsQuery), config)(DetailNews)
