import React from 'react'
import { Link } from 'react-router-dom'
import gql from 'graphql-tag';
import {
  graphql
} from 'react-apollo';
import findIndex from 'lodash/findIndex';
import Content from './Main'
const detailNewsQuery = `
query detailNewsQuery($id:String!){
  news(id:$id){
    id
    title
    content
    author{
      id
      username
    }
    pictures{
      id
      path
    }
    comment{
      id
      content
      user{
        id
        username
      }
      replies{
        id
        content
        user{
          id
          username
        }
      }
    }
  }
}
  `

const DetailNews = ({ data: {loading, error, news},currentId}) => {

  if (loading) {
    return <p>loading...</p>
  }
  if (error) {
    console.log('masuk sini')
    return <p>{error.message}</p>;
  }

  console.log("ini dia: "+news)
 return [ 
  <Content
    key="content-by-cat"
    comments = {news.comment.map(c => ({
      replies:c.replies.map(r =>({
        author:r.user.username,
        date:new Date()+"",
        content:r.content
      })),
      author:c.user.username,
      date:new Date()+"",
      content:c.content
    }))}
    title= {news.title}
    author= {news.author.username}
    date= {new Date()+""}
    commentCount= {news.comment.length}
    picture= {news.pictures[0].path}
    content={news.content}
  />
  ]
};
export default graphql(gql(detailNewsQuery), {
options: ({currentId}) => ({
  variables: {
    id:currentId
  },
})
})(DetailNews);


