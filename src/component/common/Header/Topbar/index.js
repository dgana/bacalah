import React from 'react'
import { Link } from 'react-router-dom'

// Plugin Dependencies
import Modal from 'react-bootstrap-modal'
import decode from 'jwt-decode'

// GraphQL
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'
import { registerMutation, loginMutation } from './gql/'
import { registerConfig, loginConfig } from './gql/config'

class Topbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      openRegister: false,
      openLogin: false,
      registerValid: false,
      formRegister: {
        username: '',
        password: '',
        email: '',
        firstName: '',
        lastName: '',
        isAuthor: true
      },
      formLogin: {
        email: '',
        password: ''
      },
      usernameIsUnique: false,
      emailIsUnique: false,
      passwordVal: false,
      emailVal: false
    }
  }

  _closeModalRegister = () => {
    this.setState({ openRegister: false })
  }

  _saveAndCloseRegister = () => {
    const { username, password, email, firstName, lastName } = this.state.formRegister
    if (username && password && email && firstName && lastName) {
      this.props.submit(this.state.formRegister)
      .then(res => {
        const errors = res.data.addUser.errors
        const data = res.data.addUser
        if (errors) {
          console.log(errors);
          if (errors[0].message === "username must be unique") {
            this.setState({ usernameIsUnique: true })
            setTimeout(() => this.setState({ usernameIsUnique: false }), 5000)
          } else if (errors[0].message === "email must be unique") {
            this.setState({ emailIsUnique: true })
            setTimeout(() => this.setState({ emailIsUnique: false }), 5000)
          }
        } else {
          localStorage.setItem('bacalahtoken', data.token)
          localStorage.setItem('bacalahrefreshToken', data.refreshToken)
          localStorage.setItem('bacalahuser', JSON.stringify(decode(data.token)))
          this.setState({ openRegister: false })
        }
      })
    } else {
      this.setState({ registerValid: true })
      setTimeout(() => this.setState({ registerValid: false }), 5000)
    }

  }

  _handleFormChangeRegister = (type, value) => {
    const newForm = {
      ...this.state.formRegister,
      [type]: value
    }
    this.setState({ formRegister: newForm })
  }

  _closeModalLogin = () => {
    this.setState({ openLogin: false })
  }

  _saveAndCloseLogin = () => {
    this.props.submitLogin(this.state.formLogin)
    .then(res => {
      const errors = res.data.login.errors
      const data = res.data.login
      if (errors) {
        console.log(errors);
        if (errors[0].message === "Wrong password") {
          this.setState({ passwordVal: true })
          setTimeout(() => this.setState({ passwordVal: false }), 5000)
        } else if (errors[0].message === "Wrong email") {
          this.setState({ emailVal: true })
          setTimeout(() => this.setState({ emailVal: false }), 5000)
        }
      } else {
        localStorage.setItem('bacalahtoken', data.token)
        localStorage.setItem('bacalahrefreshToken', data.refreshToken)
        localStorage.setItem('bacalahuser', JSON.stringify(decode(data.token)))
        this.setState({ openLogin: false })
      }
    })
  }

  _handleFormChangeLogin = (type, value) => {
    const newForm = {
      ...this.state.formLogin,
      [type]: value
    }
    this.setState({ formLogin: newForm })
  }

  _logOut = () => {
    localStorage.clear()
    window.location.reload()
  }

  render() {
    const {
      formRegister,
      formLogin,
      usernameIsUnique,
      emailIsUnique,
      registerValid,
      passwordVal,
      emailVal
    } = this.state

    return (
      <div>
        <Modal
          show={this.state.openRegister}
          onHide={() => this._closeModalRegister()}
          aria-labelledby="ModalHeader">
          <Modal.Header closeButton>
            <Modal.Title id='ModalHeader'>Register</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-md-12" style={{padding: '0px 30px'}}>
                <div className="form-group">
                  <label style={{width: '100%'}}>
                    Username
                    <span style={{float: 'right', color: 'red', transition: '0.6s', opacity: usernameIsUnique ? 1 : 0, visibility: usernameIsUnique ? 'visible' : 'hidden'}}>Nama user sudah terdaftar</span>
                  </label>
                  <input
                    type="text"
                    name="username"
                    className="form-control"
                    value={formRegister.username}
                    placeholder="Nama User"
                    onChange={(e) => this._handleFormChangeRegister('username', e.target.value)} />
                </div>
                <div className="form-group">
                  <label>Password</label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      value={formRegister.password}
                      placeholder="Password"
                      onChange={(e) => this._handleFormChangeRegister('password', e.target.value)} />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <span style={{float: 'right', color: 'red', transition: '0.6s', opacity: emailIsUnique ? 1 : 0, visibility: emailIsUnique ? 'visible' : 'hidden'}}>Email sudah terdaftar</span>
                  <input
                    type="text"
                    name="email"
                    className="form-control"
                    value={formRegister.email}
                    placeholder="Tulis Email"
                    onChange={(e) => this._handleFormChangeRegister('email', e.target.value)} />
                </div>
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    className="form-control"
                    value={formRegister.firstName}
                    placeholder="Nama Awalan"
                    onChange={(e) => this._handleFormChangeRegister('firstName', e.target.value)} />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    className="form-control"
                    value={formRegister.lastName}
                    placeholder="Nama Akhiran"
                    onChange={(e) => this._handleFormChangeRegister('lastName', e.target.value)} />
                </div>
                <p style={{color: 'red', marginBottom: 0, marginTop: 0, transition: '0.6s', opacity: registerValid ? 1 : 0, visibility: registerValid ? 'visible' : 'hidden'}}>Field tidak boleh ada yang kosong</p>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Modal.Dismiss className='btn btn-default'>Batal</Modal.Dismiss>
            <button className='btn btn-primary' onClick={() => this._saveAndCloseRegister()}>
              Register
            </button>
          </Modal.Footer>
        </Modal>
        <Modal
          show={this.state.openLogin}
          onHide={() => this._closeModalLogin()}
          aria-labelledby="ModalHeader">
          <Modal.Header closeButton>
            <Modal.Title id='ModalHeader'>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-md-12" style={{padding: '0px 30px'}}>
                <div className="form-group">
                  <label>Email</label>
                  <span style={{float: 'right', color: 'red', transition: '0.6s', opacity: emailVal ? 1 : 0, visibility: emailVal ? 'visible' : 'hidden'}}>Email tidak ditemukan</span>
                  <input
                    type="text"
                    name="username"
                    className="form-control"
                    value={formLogin.email}
                    placeholder="Email Anda"
                    onChange={(e) => this._handleFormChangeLogin('email', e.target.value)} />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <span style={{float: 'right', color: 'red', transition: '0.6s', opacity: passwordVal ? 1 : 0, visibility: passwordVal ? 'visible' : 'hidden'}}>Password salah</span>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      value={formLogin.password}
                      placeholder="Password"
                      onChange={(e) => this._handleFormChangeLogin('password', e.target.value)} />
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button className='btn btn-primary' onClick={() => this._saveAndCloseLogin()}>
              Masuk
            </button>
          </Modal.Footer>
        </Modal>
        <div id="nav-topbar" className="nav-topbar">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-6">
                { localStorage.getItem('bacalahtoken') ?
                  <ul className="top-link menu top-bar-menu">
                    <li style={{marginRight: 12, cursor: 'pointer'}}><Link style={{fontSize: 9 }} to="/create-news">Create News</Link></li>
                    {/* <li style={{marginRight: 12, cursor: 'pointer'}}>Advertisement</li> */}
                  </ul> :
                  <ul className="top-link menu top-bar-menu">
                    <li style={{marginRight: 12, cursor: 'pointer'}} onClick={() => this.setState({ openRegister: true })}>Register</li>
                    <li style={{marginRight: 12, cursor: 'pointer'}} onClick={() => this.setState({ openLogin: true })}>Login</li>
                  </ul>
                }
              </div>
              { localStorage.getItem('bacalahtoken') ?
                <ul className="social-icon-list menu top-bar-menu">
                  <li style={{marginTop: 3, fontSize: 11}}>
                    welcome {JSON.parse(localStorage.getItem('bacalahuser')).user.username}
                  </li>
                  <li onClick={() => this._logOut()} style={{marginTop: 3, fontSize: 11, cursor: 'pointer', marginLeft: 16  }}>
                    Log Out
                  </li>
                </ul> : null
              }
              {/* <div className="col-md-6 col-sm-6" style={{marginTop: 4}}>
                <ul className="social-icon-list menu top-bar-menu">
                  <li>
                    <form id="search-form" className="form-search form-horizontal">
                      <div className="input-append">
                        <input type="text" className="search-query" placeholder="" />
                        <button type="submit" className="btn"><i className="fa fa-search"></i></button>
                      </div>
                    </form>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default compose(
  graphql(gql(registerMutation), registerConfig),
  graphql(gql(loginMutation), loginConfig)
)(Topbar)
