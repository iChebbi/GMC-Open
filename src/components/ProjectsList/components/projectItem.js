import React from 'react'
import ReactImageFallback from "react-image-fallback"
import placeholder from './placeholder.png'
import './style.css'

const toTitleCase = (str = '') => str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())

export default ({ id, name, description, logo, keywords, openModal }) => {
  return (
    <div className="project-item" onClick={() => openModal(id)}>
      <ReactImageFallback
        src={logo}
        fallbackImage={placeholder}
        alt={name}
        className='icon'
      />
      <div className="text-content">
        <h4 className="title">{toTitleCase(name)}</h4>
        <div className="description">{description.slice(0, 140)}</div>
        <div className="keywords">
          {JSON.parse(keywords).map((keyword, key) => <div key={key} className="keyword">{keyword.text}</div>)}
        </div>
      </div>
    </div>
  )
}
