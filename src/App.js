import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './component/routes/Home'
import NewsCategory from './component/routes/NewsCategory'
import NewsDetail from './component/routes/NewsDetail'

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

class App extends Component {
  render() {
    return (
      <Router>
       <div style={{background: 'rgb(23,179,213)'}}>
        <Route exact path="/" component={Home} />
        <Route exact path="/:categoryId" component={NewsCategory} />
        <Route exact path="/:categoryId/:newsDetailId" component={NewsDetail} />
       </div>
      </Router>
    )
  }
}

export default App
