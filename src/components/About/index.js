import React, { Component } from 'react'
import './style.css'

export default class About extends Component {
  render() {
    return (
      <div className='about-container'>
        <div className='about-container-intro'>
          <div className='about-container-intro-title'>
            <h2>About us</h2>
          </div>
          <p>GoMyCode is a 21st century coding school founded in Tunisia in 2017 by Yahya Buhlel and Amine Bouhlel, aiming to improve the quality of  programming education and to spread new technologies in Africa while reducing the mismatch between student skills and current market needs using our unique blended-learning methodology.</p>
          <p>We strongly believe that technology  is changing  the world disruptively and that it is crucial for African Youth  to master digital technology tools  and to easily adapt to changes, avoiding  unemployment. extremism and poverty.</p>
        </div>
      </div>
    )
  }
}
