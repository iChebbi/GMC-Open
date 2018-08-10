import React from 'react'
import ReactImageFallback from 'react-image-fallback'
import Modal from '@atlaskit/modal-dialog'
import placeholder from './placeholder.png'

const toTitleCase = (str = '') => str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())

export default ({currentProject, toggleModal}) => {
  const {product: {name, description, logo, image, keywords, url} = {}, owner: {email_Value: email, fullName} = {}, track: {name: track} = {}} = currentProject
  console.log({currentProject})
  return (<Modal width={window.innerWidth * 0.5} onClose={toggleModal}>
    <div className="project-modal-header">
      <span className="close-btn" onClick={() => toggleModal()}>&times;</span>
    </div>
    <div className="project-modal-content">
      <div className="project-header">
        <ReactImageFallback
            src={logo}
            fallbackImage={placeholder}
            alt={name}
            className='icon'
        />
        <div className="text-content">
          <h4 className="title">{toTitleCase(name)} by {toTitleCase(fullName)} - {toTitleCase(track)}</h4>
          <div className="keywords">
            {keywords && JSON.parse(keywords).map((keyword, key) => <div key={key}
                                                                         className="keyword">{keyword.text}</div>)}
          </div>
        </div>
        <div>
          <div className="url-btn project-page">
            <i className="fab fa-safari"/>
            <a className="url" target="_blank" href={url}>Project page</a>
          </div>
          <div className="url-btn author-email">
            <i className="far fa-envelope"/>
            <a target="_blank" href={'mailto:' + email}>Contact Author</a>
          </div>
        </div>
      </div>
      <div className="project-content">
        <p>{description}</p>
        <ReactImageFallback
            src={image}
            fallbackImage={placeholder}
            alt={name}
            className='image'
        />
      </div>
    </div>
  </Modal>)
}
