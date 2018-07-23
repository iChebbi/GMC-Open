import React from 'react'
import Header from './Header'
import Form from './Form'
import Conditions from './Conditions'
import Duration from './Duration'
import Location from './Location'
import Content from './Content'
import opportunities from './Opportunities'
import Partners from './Partners'
import WhereToBegin from './WhereToBegin'
import Footer from './Footer'
import Carousele from './Carousel'
import Opportunities from './Opportunities'
import './landing.css'

class LandingPage extends React.Component {
  render () {
    return (
      <div className='landing-page-container'>
        <Header />
        <Form />
        <Conditions />
        <WhereToBegin />
        <Location />
        <Duration />
        {/* <Content /> */}
        <Footer />
      </div>
    )
  }
}

export default LandingPage
