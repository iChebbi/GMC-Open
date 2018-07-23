import React, {Component} from 'react'
import './partners.css'

class Partners extends Component {

  render () {
    return (
      <div className='partners-container'>
        <div className='partners-container-content'>
          <h2>Partenaires de 1000 Coders</h2>
          <div className='partners-logo'>
            <img src='partners/talan.png' />
            <img src='partners/drosos.png' />
            <img src='partners/aneti.png' />
            <img src='partners/4c.png' />
          </div>
        </div>
      </div>
    )
  }
}

export default Partners
