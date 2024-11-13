import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {
    isSubscribed: false,
  }

  onSubscribe = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  getButtonText = () => {
    const {isSubscribed} = this.state
    if (isSubscribed === true) {
      return 'Subscribed'
    }
    return 'Subscribe'
  }

  render() {
    const btnText = this.getButtonText()
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="paragraph">Thank you! Happy Learning</p>
        <button type="button" className="button" onClick={this.onSubscribe}>
          {btnText}
        </button>
      </div>
    )
  }
}

export default Welcome
