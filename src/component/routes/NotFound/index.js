// React, React-Router, PropTypes & Redux Dependencies
import React from 'react';
import { Redirect } from 'react-router-dom'

const NotFound = ({ location }) => (
  <div>
    <Redirect to={{ pathname: '/'}}/>
  </div>
)

export default NotFound
