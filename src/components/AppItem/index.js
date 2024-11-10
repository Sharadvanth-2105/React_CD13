// Write your code here
import './index.css'
const AppItem = props => {
  const {AppDetails} = props
  const {appId, appName, imageUrl, category} = AppDetails

  return (
    <>
      <li className="App-container">
       
          <img className="img" src={imageUrl} alt={appName} />

        <p className="para">{appName}</p>
      </li>
    </>
  )
}
export default AppItem
