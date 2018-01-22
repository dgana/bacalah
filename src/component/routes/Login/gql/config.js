module.exports = {
  loginConfig: {
    props: ({ mutate }) => ({
      submitLogin: (form) => mutate({ variables: {
        email: form.email,
        password: form.password
      }})
    })
  }
}
