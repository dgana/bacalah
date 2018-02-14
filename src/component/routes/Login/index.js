// React, React-Router, PropTypes & Redux Dependencies
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

// Plugin Dependencies
import decode from 'jwt-decode'

// GraphQL
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'
import { loginMutation } from './gql/'
import { loginConfig } from './gql/config'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      button: false,
      passwordVal: false,
      emailVal: false,
      redirect: false
    }
  }

  handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitLogin = (e) => {
    e.preventDefault()
    const formLogin ={
      email: this.state.email,
      password: this.state.password
    }

    this.props.submitLogin(formLogin)
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
        this.setState({ button: false, redirect: true })
      }
    })
  }

  render() {
    const { email, password, button, emailVal, passwordVal, redirect } = this.state

    if (redirect) {
       return <Redirect to='/create-news'/>
     }

    return (
      <div className="login-background" style={{height: window.innerHeight}}>
        <div className="login-box" style={{marginTop: '-4%', width: '30%'}}>
          <div className="login-logo" style={{marginBottom: 0}}>
            <div style={{height: 115, width: 350, background: 'rgb(207,0,0)', position: 'relative', padding: '0px 24px', display: 'inline-block', borderRadius: 2}}>
              <h1 className="site-logo" style={{fontFamily: 'bitter', letterSpacing: '-1px', fontSize: 47, color: 'rgb(250,250,250)', fontWeight: 1000, position: 'relative', top: 16}}>
                Bacalah.co
              </h1>
              <p style={{fontFamily: 'BradleyHand', color: 'white', fontSize: 16, fontWeight: 700, position: 'relative', top: 12}}>Informasi di tangan anda, maka bacalah...</p>
            </div>
          </div>
          <div className="login-box-body" style={{backgroundColor:'inherit'}}>
            <form onSubmit={this.submitLogin}>
              <div className="form-group has-feedback">
                <span style={{float: 'right', color: 'red', transition: '0.6s', opacity: passwordVal ? 1 : 0, visibility: passwordVal ? 'visible' : 'hidden'}}>Password salah</span>
                <span style={{float: 'right', color: 'red', transition: '0.6s', opacity: emailVal ? 1 : 0, visibility: emailVal ? 'visible' : 'hidden'}}>Email tidak ditemukan</span>
                <input type="text" value={email} name='email' className="form-control" placeholder="Email" onChange={this.handleChange} />
                {/* <span className="fa fa-university form-control-feedback" style={{borderLeft: '1px solid rgb(210,210,210)', width:'13%', height:'100%'}}></span> */}
              </div>
              <div className="form-group has-feedback">

                <input type="password" value={password} name='password' className="form-control" placeholder="Password" onChange={this.handleChange} />
                {/* <span className="glyphicon glyphicon-lock form-control-feedback" style={{borderLeft: '1px solid rgb(210,210,210)', width:'13%', height:'100%'}}></span> */}
              </div>
              <div className="row" style={{display:  'flex', justifyContent: 'flex-end'}}>
                <div className="col-xs-7 col-xs-offset-5">
                  { !button ? <button type="submit" style={{background: '#428bca', color: 'white', display: 'flex', justifyContent: 'center'}} className="no-border btn btn-primary btn-block btn-flat">Masuk</button> :
                    <button disabled={true} type="submit" className="no-border btn btn-primary btn-block btn-flat">Harap Tunggu... </button>
                  }
                </div>
              </div>
            </form>
            <a href="#" style={{color:'rgb(50,50,50)'}}></a><br />
          </div>
        </div>
      </div>
    );
  }
}

export default compose(
  graphql(gql(loginMutation), loginConfig)
)(Login)
