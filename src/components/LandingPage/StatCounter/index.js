import React from 'react'
import './StatCounter.css'

class StatCounter extends React.Component {
  render() {
    return (
      <div className='wheretobegin-container'>
        <div className='container'>
          <h2>Open Source Contributions</h2>
          <div className="numbers">
            <div className="number-card">
              <div className="number-title">Tracks</div>
              <div className="stat-number">1337</div>
            </div>
            <div className="number-card">
              <div className="number-title">Students</div>
              <div className="stat-number">1337</div>
            </div>
            <div className="number-card">
              <div className="number-title">Projects</div>
              <div className="stat-number">1337</div>
            </div>
          </div>
          <a href='https://github.com/GoMyCodeAfrica' target='_blank' rel="noopener noreferrer">Repo GoMyCode sur Github</a>
        </div>
      </div>
    )
  }
}

export default StatCounter
