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
      }})
    })
  },
  loginConfig: {
    props: ({ mutate }) => ({
      submitLogin: (form) => mutate({ variables: {
        email: form.email,
        password: form.password
      }})
    })
  }
}
