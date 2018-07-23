import React from 'react'
import './WhereToBegin.css'

class WhereToBegin extends React.Component {
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
          <a href='https://github.com/GoMyCodeAfrica' target='_blank'>Repo GoMyCode sur Github</a>
        </div>
      </div>
    )
  }
}

export default WhereToBegin
