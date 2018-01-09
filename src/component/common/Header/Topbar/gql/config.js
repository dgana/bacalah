module.exports = {
  registerConfig: {
    props: ({ mutate }) => ({
      submit: (form) => mutate({ variables: {
          "username": "tes3",
          "password": "tes3",
          "email": "tes3",
          "firstName": "tes3",
          "lastName": "tes3",
          "isAuthor": true
        }
      })
    })
  }
}
