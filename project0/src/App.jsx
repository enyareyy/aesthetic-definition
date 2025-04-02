import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Hero from './components/Hero/Hero'
import Card from './components/Card/Card'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div className='container'>
      <Header/>
      <Hero/>
      <Card/>
      <Footer/>
      </div>
  )
}

export default App