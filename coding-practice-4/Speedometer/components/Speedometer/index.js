// Write your code here

import './index.css'
import {Component} from 'react'

class Speedometer extends Component {
  state = {
    speed: 0,
  }

  onClickApplyBreakButton = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  onClickAccelerateButton = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="speedometer-app-container">
        <dib className="speedometer-container">
          <h1 className="heading">SPEEDOMETER</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
            className="speedometer-image"
          />
          <h1 className="speed-text">Speed is {speed}mph</h1>
          <p className="speed-limits">Min Limit is 0mph, Max Limit is 200mph</p>
          <div className="buttons-container">
            <button
              type="button"
              className="accelerate-button button"
              onClick={this.onClickAccelerateButton}
            >
              Accelerate
            </button>
            <button
              type="button"
              className="apply-break-button button"
              onClick={this.onClickApplyBreakButton}
            >
              Apply Break
            </button>
          </div>
        </dib>
      </div>
    )
  }
}
export default Speedometer