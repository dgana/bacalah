module.exports = {
  registerConfig: {
    props: ({ mutate }) => ({
      submit: (form) => mutate({ variables: {
        username: form.username,
        password: form.password,
        email: form.email,
        firstName: form.firstName,
        lastName: form.lastName,
        isAuthor: form.isAuthor
      },
      optimisticResponse: {
        __typename: 'Mutation',
        addUser: {
          __typename: 'AddUser',
          ok: true,
          user: {
            __typename: 'User',
            id: 1,
            username: ''
          },
          errors: []
        }
      }
      })
    })
  }
}
