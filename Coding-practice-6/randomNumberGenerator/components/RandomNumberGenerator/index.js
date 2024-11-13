import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    count: 0,
  }

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onIncreament = () => {
    const randomNumber = this.getRandomNumber()
    this.setState({count: randomNumber})
  }

  render() {
    const {count} = this.state
    return (
      <div className="app-container">
        <div className="counter-container">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" className="button" onClick={this.onIncreament}>
            Generate
          </button>
          <p className="count">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
