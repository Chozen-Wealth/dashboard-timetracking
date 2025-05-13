import { useState } from 'react'
import './App.css'
import Profile from './components/profile/profile'
import Cards from './components/cards/cards'
import data from "../public/time-tracking-dashboard-main/data.json"

function App() {
  // timeframe à changer ici qui est importé là où on a besoin de l'appeler ou le changer
  const [timeframe, setTimeframe] = useState("weekly")
  const [darkmode, setDarkmode] = useState("dark")

  return (
    <div className='app'>
      <div className='divDarkMode'>
        {darkmode === "dark" ? (
          <svg onClick={()=> setDarkmode("light")} id='light' style={{transform: "scale(-1)"}} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm40-83q119-15 199.5-104.5T800-480q0-123-80.5-212.5T520-797v634Z"/></svg>
        )
        :
        (
          <svg onClick={()=> setDarkmode("dark")} id='dark' style={{transform: "scale(-1)"}} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm40-83q119-15 199.5-104.5T800-480q0-123-80.5-212.5T520-797v634Z"/></svg>
        )}
      </div>
      <div className='appContent'>
        <div className='appLeft'>
          <Profile setTimeframe={setTimeframe} current={timeframe} mode={darkmode} />
        </div>
        <div className="appRight">
          <Cards time={timeframe} mode={darkmode} />
        </div>
      </div>
    </div>
  )
}

export default App
