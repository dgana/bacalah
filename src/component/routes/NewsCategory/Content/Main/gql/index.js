module.exports = `
  mutation updateClickCount($newsId: String!) {
    updateClickCount(newsId: $newsId) {
      id
    }
  }
`
