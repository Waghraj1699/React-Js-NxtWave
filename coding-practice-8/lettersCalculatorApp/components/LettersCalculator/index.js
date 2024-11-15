import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    inputLetters: '',
  }

  onChangeInput = event => {
    const {value} = event.target
    this.setState({inputLetters: value})
  }

  render() {
    const {inputLetters} = this.state
    return (
      <div className="app-container">
        <div className="letters-calculator-container">
          <div className="calculator-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <div className="input-container">
              <label className="label" htmlFor="inputText">
                Enter the phrase
              </label>
              <input
                className="input-letters"
                id="inputText"
                onChange={this.onChangeInput}
                type="text"
                value={inputLetters}
              />
            </div>
            <p className="letters-count">
              No.of letters: {inputLetters.length}
            </p>
          </div>
          <img
            className="calculator-img"
            alt="letters calculator"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
