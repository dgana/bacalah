module.exports = `
  mutation($id: String!, $clickCount: Int!) {
    updateClickCount(id: $id, clickCount: $clickCount) {
      id
      clickCount
    }
  }
`
