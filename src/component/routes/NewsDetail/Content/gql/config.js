module.exports = {
  options: ({currentId}) => ({
    variables: {
      id: currentId
    },
    notifyOnNetworkStatusChange: true
  })
}
