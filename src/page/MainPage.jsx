import React from 'react'
import Header from '../components/MainHeader/Header'
import Advantages from '../components/Advantages/Advantages'
import AboutUs from '../components/AboutUs/AboutUs'
import NetPro from '../components/NetPro/NetPro'
import Sertificate from '../components/Sertificate/Sertificate'
import Comments from '../components/Comments/Comments'

const MainPage = () => {
  return (
    <div>
      <Header/>
      <Advantages/>
      <AboutUs/>
      <NetPro/>
      <Sertificate/>
      <Comments/>
    </div>
  )
}

export default MainPage