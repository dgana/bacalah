import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
// import decode from 'jwt-decode'

import Home from './component/routes/Home'
import NewsCategory from './component/routes/NewsCategory'
import NewsDetail from './component/routes/NewsDetail'
import CreateNews from './component/routes/CreateNews'
import NotFound from './component/routes/NotFound'

import './dist/css/bootstrap.min.css'
import './dist/css/widget.css'
import './dist/css/main.css'
import './dist/css/layout.css'
import './dist/css/modules/form.css'
import './dist/css/modules/media.css'
import './dist/css/layouts/card.css'
import './dist/css/layouts/news.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import 'react-bootstrap-modal/lib/css/rbm-patch.css'
// import 'bootstrap/dist/js/bootstrap.min.js'

const isAuthenticated = () => {
  const token = localStorage.getItem('bacalahtoken')
  const refreshToken = localStorage.getItem('bacalahrefreshToken')
  // try {
  //   decode(token)
  //   const { exp } = decode(refreshToken)
  //   if (Date.now() / 1000 > exp) {
  //     return false
  //   }
  // } catch (err) {
  //   return false
  // }
  // if (!token) {
  //   return false
  // }
  return true
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      (isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/',
          }}
        />
      ))
    }
  />
)

class App extends Component {
  render() {
    return (
      <Router>
        <div style={{background: 'rgb(23,179,213)'}}>
          <Route exact path="/" component={Home} />
          <Route exact path="/news" component={NewsCategory} />
          <Route exact path="/cakap-cakap" component={NewsCategory} />
          <Route exact path="/kolom lantaklah" component={NewsCategory} />
          <Route exact path="/jalan-jalan" component={NewsCategory} />
          <Route exact path="/politik" component={NewsCategory} />
          <Route exact path="/khazanah" component={NewsCategory} />
          <Route exact path="/hankam" component={NewsCategory} />
          <Route exact path="/:categoryId/:newsDetailId" component={NewsDetail} />
          <PrivateRoute exact path="/create-news" component={CreateNews} />
          <Route component={NotFound} />
        </div>
      </Router>
    )
  }
}

export default App
