module.exports = {
  registerMutation: `
    mutation($username:String!, $password:String!, $email:String!, $firstName:String!, $lastName:String!, $isAuthor:Boolean!){
      addUser(username:$username, password:$password, email:$email, firstName:$firstName, lastName:$lastName, isAuthor:$isAuthor){
        ok
        user{
          id
          username
        }
        token
        refreshToken
        errors {
          message
        }
      }
    }
  `,
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
