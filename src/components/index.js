import React from 'react'

import Navbar from './Navbar'
import CarouselContainer from './Carousel'
import Presentation from './Presentation'
import ProjectsList from './ProjectsList'
import StatCounter from './StatCounter'
import Technologies from './Technologies'
import About from './About'
import Footer from './Footer'

import './landing.css'

class LandingPage extends React.Component {

  render() {
    return (<div className='landing-page-container'>
      <Navbar />
      <CarouselContainer />
      <Presentation />
      <StatCounter />
      <ProjectsList />
      <Technologies />
      <About />
      <Footer />
    </div>)
  }
}

export default LandingPage
