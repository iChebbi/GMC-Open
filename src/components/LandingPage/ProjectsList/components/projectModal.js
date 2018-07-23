import React from 'react'
import Modal from '@atlaskit/modal-dialog'

export default ({ currentProject: { name, description, logo, image, keywords, url, email }, toggleModal }) => {
  return (
    <Modal width={window.innerWidth * 0.5} onClose={toggleModal} >
      <div className="project-modal-header">
        <span className="close-btn" onClick={() => toggleModal()}>&times;</span>
      </div>
      <div className="project-modal-content">
        <div className="project-header">
          <img src={logo} alt={name} className="icon" />
          <div className="text-content">
            <h4 className="title">{name}</h4>
            <div className="keywords">
              {JSON.parse(keywords).map((keyword, key) => <div key={key} className="keyword">{keyword.text}</div>)}
            </div>
          </div>
          <div>
            <div className="url-btn project-page">
              <i class="fab fa-safari" />
              <a className="url" target="_blank" href={url}>Project page</a>
            </div>
            <div className="url-btn author-email">
              <i class="far fa-envelope" />
              <a className="" target="_blank" href={'mailto://' + email}>Contact Author</a>
            </div>
          </div>
        </div>
        <div className="project-content">
          <p>{description}</p>
          <img className="image" src={image} alt={name} />
        </div>
      </div>
    </Modal>
  )
}
