import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import IT from './pages/it'
import Music from './pages/music'
import Art from './pages/art'
import Contact from './pages/contact'
import {HashRouter, Routes, Route} from "react-router-dom"
import pcFrame from "./assets/site_frame.png"
import PcButton from './components/pcButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/*<BrowserRouter>
      <Routes>
        <Route path ="/IT" element ={<IT/>}/>
        <Route path ="/Music" element ={<Music/>}/>
        <Route path ="/Art" element ={<Art/>}/>
        <Route path ="/Contact" element ={<Contact/>}/>
      </Routes>
    </BrowserRouter>*/}
    <HashRouter>
          <div className="Buttons">
            <PcButton text="IT" path="/"/>
            <PcButton text="Music" path="/music"/>
            <PcButton text="Art" path="/art"/>
            <PcButton text="Contact" path="/contact"/>
          </div>
      <Routes>
        <Route path = "/" element = {<IT/>}/>
        <Route path = "/Music" element ={<Music/>}/>
        <Route path ="/Art" element ={<Art/>}/>
        <Route path ="/Contact" element ={<Contact/>}/>
      </Routes>
    </HashRouter>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <h1>stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff</h1>
      <h1>stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff</h1>

    <img className="pcFrame" src={pcFrame}></img>
    </>
  )
}

export default App
