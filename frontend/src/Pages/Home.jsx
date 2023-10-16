import React from 'react'
import Chat from '../components/Chat/Chat'
import { Results } from '../components/Results/Results'
import './Home.css'
const Home = () => {
  return (
    <div className='home'>
        <div className="chat">
        <Chat/>
        </div>
        <div className="results">
        <Results/>
        </div>
    </div>
  )
}

export default Home