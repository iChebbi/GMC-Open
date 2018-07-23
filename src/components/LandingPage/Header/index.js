import React from 'react'
import './style.css'

class Header extends React.Component {
  render () {
    return (
      <div className='thousand-navbar'>
        <div className='logo-container'>
          <img className='logo' src='logo.png' alt='gmc logo' />
        </div>
      </div>

    )
  }
}

export default Header
