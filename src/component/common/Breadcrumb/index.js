import React from 'react'
import { Link } from 'react-router-dom'

// Utility
import { capitalizeFirstLetter } from '../../../util'

const Breadcrumb = (props) => {

  const splitPathname = props.path.split('/')
  splitPathname.shift()
  const splitLast = splitPathname.pop()
  console.log(props)
  return (
    <div className="breadcrumb-wrapper">
      <ol className="breadcrumb">
        <li><Link to="/">Home</Link></li>
        { splitPathname.map((item, index) => (
            <li key={index}><Link to={`/${item}`}>{capitalizeFirstLetter(item)}</Link></li>
          ))
        }
        <li className="active">{capitalizeFirstLetter(splitLast)}</li>
      </ol>
    </div>
  )
}

export default Breadcrumb
