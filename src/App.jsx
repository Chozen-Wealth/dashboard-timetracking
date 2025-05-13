import { useState } from 'react'
import './App.css'
import Profile from './components/profile/profile'
import Cards from './components/cards/cards'

function App() {
  return (
    <div className='app'>
      <div className='appContent'>
        <div className='appLeft'>
          <Profile/>
        </div>
        <div className="appRight">
          <Cards/>
        </div>
      </div>
    </div>
  )
}

export default App
