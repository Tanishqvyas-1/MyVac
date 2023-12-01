import React from 'react'
import './CityTour.css'
import NavBar from './components/NavBar/NavBar' 
import TourList from './components/TourList/TourList'
import Content from './components/Content'
import Content2 from './components/Content2'
import Footer from './components/Footer'
export default function Project() {
  return (
    <>
    
    <NavBar/>
    <Content/>
    <TourList/>
    <Content2/>
    <Footer/>
    </>
  )
}

