module.exports = {
  registerConfig: {
    props: ({ mutate }) => ({
      submitRegister: (form) => mutate({ variables: {
        username: form.username,
        password: form.password,
        email: form.email,
        firstName: form.firstName,
        lastName: form.lastName,
        isAuthor: form.isAuthor
      }})
    })
  }
}
