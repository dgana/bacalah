module.exports = {
  options: (props) => ({
    variables: {
      id: props.match.params.newsDetailId
    }
  })
}
