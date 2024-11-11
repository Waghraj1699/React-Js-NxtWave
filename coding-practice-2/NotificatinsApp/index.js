const Notification = props => {
  //  Write your code here.
  const {boxDetails} = props
  const {className, imgUrl, message} = boxDetails
  console.log(props)
  return (
    <li className={className}>
      <img src={imgUrl} alt='Image' />
      <p>{message}</p>
    </li>
  )
}

const boxDetails = [
  {
    uniqueNo: 1,
    className: 'box1',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/primary-icon-img.png',
    message: 'Information Message',
  },
  {
    uniqueNo: 2,
    className: 'box2',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/success-icon-img.png',
    message: 'Success Message',
  },
  {
    uniqueNo: 3,
    className: 'box3',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/warning-icon-img.png',
    message: 'Danger Message',
  },
  {
    uniqueNo: 4,
    className: 'box4',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/danger-icon-img.png',
    message: 'Error Message',
  },
]
const element = (
  //  Write your code here.
  <div>
    <h1>Notifications</h1>
    <ul>
      {boxDetails.map(eachItem => (
        <Notification boxDetails={eachItem} />
      ))}
    </ul>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
