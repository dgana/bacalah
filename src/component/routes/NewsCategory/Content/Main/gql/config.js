module.exports = {
  props: ({ mutate }) => ({
    submit: (newsId) => mutate({ variables: {newsId} })
  })
}
