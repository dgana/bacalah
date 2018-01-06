import React from 'react'

// Plugin Dependencies
import Modal from 'react-bootstrap-modal'

class Topbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      openRegister: false,
      openLogin: false,
      formRegister: {
        username: '',
        password: '',
        email: '',
        firstName: '',
        lastName: '',
        isAuthor: false
      },
      formLogin: {
        username: '',
        password: ''
      }
    }
  }

  _closeModalRegister = () => {
    this.setState({ openRegister: false })
  }

  _saveAndCloseRegister = () => {
    this.setState({ openRegister: false })
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
    this.setState({ openLogin: false })
  }

  _handleFormChangeLogin = (type, value) => {
    const newForm = {
      ...this.state.formLogin,
      [type]: value
    }
    this.setState({ formLogin: newForm })
  }

  render() {
    const { formRegister, formLogin } = this.state
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
                  <label>Username</label>
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
                      placeholder="Minimal 6 karakter"
                      onChange={(e) => this._handleFormChangeRegister('password', e.target.value)} />
                </div>
                <div className="form-group">
                  <label>Email</label>
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
                  <label>Username</label>
                  <input
                    type="text"
                    name="username"
                    className="form-control"
                    value={formLogin.username}
                    placeholder="Nama User"
                    onChange={(e) => this._handleFormChangeLogin('username', e.target.value)} />
                </div>
                <div className="form-group">
                  <label>Password</label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      value={formLogin.password}
                      placeholder="Minimal 6 karakter"
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
                <ul className="top-link menu top-bar-menu">
                  <li style={{marginRight: 12, cursor: 'pointer'}} onClick={() => this.setState({ openRegister: true })}>Register</li>
                  <li style={{marginRight: 12, cursor: 'pointer'}} onClick={() => this.setState({ openLogin: true })}>Login</li>
                  <li style={{marginRight: 12, cursor: 'pointer'}}>Advertisement</li>
                </ul>
              </div>
              <div className="col-md-6 col-sm-6" style={{marginTop: 4}}>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Topbar
