import React from 'react'
import './Navbar.css'

class Navbar extends React.Component {
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

export default Navbar
