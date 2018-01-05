module.exports = {
  allNewsConfig: {
    options: () => ({
      variables: {
        categoryId: "jbpx9e9l"
      }
    }),
    props: (props) => {
      return {
        data: props.data,
        loadOtherCategory: () => {
          return props.data.fetchMore({
            variables: {
              categoryId: "jbpx9i5i",
            },
            updateQuery(previousResult, { fetchMoreResult }) {
              // return fetchMoreResult.newsByCategory
            }
          })
        }
      }
    }
  },
  categoriesConfig: {
    options: () => ({
      variables: {
        categoryId: "jbpx9i5i"
      }
    }),
    name: 'healthCategory'
  }
}
