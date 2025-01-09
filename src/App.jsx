// import { useState } from 'react'

import './App.css'
import Landingp from './Landingp'
import Landingslide from './Landingslide'
import Nav from './Nav'
import Marquee from './Marquee'
import Intro from './Intro'
import Shown from './Shown'
import Card from './Card'

function App() {
  return (
    <>
      <Nav/>
      <Landingslide/>
      {/* <Shown/> */}
      <Marquee/>
      <Intro/>
      <Card/>
      <Landingp/>

    </>
  )
}

export default App
