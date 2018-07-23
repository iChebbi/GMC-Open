import React from 'react'
import './style.css'

export default ({ id, name, description, logo, keywords, openModal }) => {
  return (
    <div className="project-item" onClick={() => openModal(id)}>
      <img className="icon" src={logo} alt={name} />
      <div className="text-content">
        <h4 className="title">{name}</h4>
        <div className="description">{description.slice(0,140)}</div>
        <div className="keywords">
          {JSON.parse(keywords).map((keyword, key) => <div key={key} className="keyword">{keyword.text}</div>)}
        </div>
      </div>
    </div>
  )
}
