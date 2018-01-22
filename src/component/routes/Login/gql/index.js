module.exports = {
  loginMutation: `
    mutation($email:String!,$password:String!){
      login(email:$email,password:$password){
        ok
        token
        refreshToken
        errors {
          path
          message
        }
      }
    }
  `
}
