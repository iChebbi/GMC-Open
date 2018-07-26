import React from 'react'

import Navbar from './Navbar'
import CarouselContainer from './Carousel'
import Presentation from './Presentation'
import ProjectsList from './ProjectsList'
import Projects from './Projects'
import StatCounter from './StatCounter'
import Technologies from './Technologies'
import Footer from './Footer'

import './landing.css'

class LandingPage extends React.Component {

  render() {
    return (<div className='landing-page-container'>
      <Navbar />
      <CarouselContainer />
      <Presentation />
      <StatCounter />
      <Projects />
      <ProjectsList />
      <Technologies />
      <Footer />
    </div>)
  }
}

export default LandingPage
