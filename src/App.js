import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './component/routes/Home'
import Category from './component/routes/Category'
import NewsDetail from './component/routes/NewsDetail'

import './css/bootstrap.min.css'
import './css/widget.css'
import './css/main.css'
import './css/layout.css'
import './css/modules/form.css'
import './css/modules/media.css'
import './css/layouts/card.css'
import './css/layouts/news.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import 'bootstrap/dist/js/bootstrap.min.js'

class App extends Component {
  render() {
    return (
      <Router>
       <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/:categoryId" component={Category} />
        <Route exact path="/:categoryId/:newsDetailId" component={NewsDetail} />
       </div>
      </Router>
    )
  }
}

export default App
