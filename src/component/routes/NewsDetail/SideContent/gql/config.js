module.exports = {
  categoriesConfig: {
    options: ({newsId}) => ({
      variables: {
        id: newsId
      }
    })
  },
  newsConfig: {
    options: ({categoryId}) => ({
      variables: {
        categoryId: categoryId
      }
    }),
    name: 'popularNews'
  }
}
