import { useState } from 'react'
import './App.css'
import Profile from './components/profile/profile'
import Cards from './components/cards/cards'
import data from "../public/time-tracking-dashboard-main/data.json"

function App() {
  // timeframe à changer ici qui est importé là où on a besoin de l'appeler ou le changer
  const [timeframe, setTimeframe] = useState("weekly")

  return (
    <div className='app'>
      <div className='appContent'>
        <div className='appLeft'>
          <Profile setTimeframe={setTimeframe} current={timeframe} />
        </div>
        <div className="appRight">
          <Cards time={timeframe} />
        </div>
      </div>
    </div>
  )
}

export default App
