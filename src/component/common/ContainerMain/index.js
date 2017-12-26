import React from 'react'

import MainAds from '..//MainAds'

const ContainerMain = (props) => (
  <div className="container full-page">
    <div className="row">
      { props.MainAds ? <MainAds /> : null }
      { props.children }
    </div>
  </div>
)

export default ContainerMain
