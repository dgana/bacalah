module.exports = `
  query($id:String!){
    categories{
      id
      name
    },
    news(id:$id){
      id
      category{
        id
      }
    }
  }
`
