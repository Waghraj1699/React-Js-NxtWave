import {Component} from 'react'
import './index.css'

const HEADS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const TAILS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossImg: HEADS_IMG_URL,
    totalCount: 0,
    totalHeadsCount: 0,
    totalTailsCount: 0,
  }

  onClickTossCoinButton = () => {
    const {totalCount, totalHeadsCount, totalTailsCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImage = ''
    let headsCount = totalHeadsCount
    let tailsCount = totalTailsCount
    let total = totalCount

    if (toss === 0) {
      tossImage = HEADS_IMG_URL
      headsCount += 1
      total += 1
    } else {
      tossImage = TAILS_IMG_URL
      tailsCount += 1
      total += 1
    }

    this.setState({
      tossImg: tossImage,
      totalHeadsCount: headsCount,
      totalTailsCount: tailsCount,
      totalCount: total,
    })
  }

  render() {
    const {tossImg, totalCount, totalHeadsCount, totalTailsCount} = this.state
    return (
      <div className="app-container">
        <div className="coin-toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={tossImg} className="toss-image" alt="toss result" />
          <button
            className="toss-button"
            type="button"
            onClick={this.onClickTossCoinButton}
          >
            Toss Coin
          </button>
          <div className="results">
            <p className="para-2">Total: {totalCount}</p>
            <p className="para-2">Heads: {totalHeadsCount}</p>
            <p className="para-2">Tails: {totalTailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
