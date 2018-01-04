module.exports = {
  props: ({ mutate }) => ({
    submit: (id, clickCount) => mutate({ variables: { id, clickCount } })
  })
}
