import React from 'react'
import { Link } from 'react-router-dom'

// Utility
import { capitalizeFirstLetter } from '../../../util'

const Breadcrumb = (props) => {
  const splitPathname = props.path.split('/')
  const splitFirst = splitPathname.shift()
  const splitLast = splitPathname.pop()
  return (
    <div className="breadcrumb-wrapper">
      <ol className="breadcrumb">
        <li><Link to="/">Home</Link></li>
        { splitPathname.map((item, index) => (
            <li><Link to={`/${item}`}>{capitalizeFirstLetter(item)}</Link></li>
          ))
        }
        <li className="active">{capitalizeFirstLetter(splitLast)}</li>
      </ol>
    </div>
  )
}

export default Breadcrumb
