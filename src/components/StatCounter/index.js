import React from 'react'
import axios from 'axios'
import CountUp from 'react-countup'

import { adaAPI } from '../../helpers'
import './StatCounter.css'

class StatCounter extends React.Component {

  state = {
    tracks: 0,
    students: 0,
    products: 0
  }

  fetchStats = async () => {
    try {
      const response = await axios.get(adaAPI + '/Products/Stats')
      const { tracks, products, students } = response.data.model
      await this.setState({
        tracks,
        products,
        students
      })
    } catch (error) { }
  }

  componentDidMount = () => this.fetchStats()

  render() {
    const { tracks, students, products } = this.state
    return (
      <div className='wheretobegin-container'>
        <div className='container'>
          <h2>Open Source Contributions</h2>
          <div className="numbers">
            <div className="number-card">
              <div className="number-title">Tracks</div>
              <CountUp className="stat-number" start={0} end={tracks} duration={3.5} />
            </div>
            <div className="number-card">
              <div className="number-title">Students</div>
              <CountUp className="stat-number" start={0} end={students} duration={4} />
            </div>
            <div className="number-card">
              <div className="number-title">Projects</div>
              <CountUp className="stat-number" start={0} end={products} duration={5.5} />
            </div>
          </div>
          <a href='https://github.com/GoMyCodeAfrica' target='_blank' rel="noopener noreferrer">Repo GoMyCode sur Github</a>
        </div>
      </div>
    )
  }
}

export default StatCounter
