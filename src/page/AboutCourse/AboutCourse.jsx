import React from 'react'
import './AboutCourse.css'
import backg from '../../assets/backg.png'
import vidicon from '../../assets/vidicon.png'

const AboutCourse = () => {
  const backgroundStyle = {
    backgroundImage: `url(${backg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "580px", 
    width: "100%", 
  };
  return (
    <>
   {/* Header */}
    <div className='header text-center'style={backgroundStyle}>
     <div className='container header__container'>
     <h1 className='header__title text-6xl text-white font-bold'>
        NetPro IT School bilan 
      kelajakni birga quring</h1>
      <div className='header__wrap flex my-0 mx-auto w-1/2'> 
        <a className='header__link text-white py-5 px-7' href="#">
          Kursga yozilish
          <i class="fa-solid fa-arrow-right"></i>
        </a>
        <div className='header__wrap_link'>
          <img src={vidicon} alt="video-icon" />
          <a className='header__link_right' href="#">
            Kurs haqida video
            </a>
        </div>
      </div>
     </div>
    </div>

    {/* Course */}
    <div className='course'>
      <h2 className='course__title'>
        Yo’nalishlar bo’yicha kurslar
        </h2>
        

    </div>
   
  
    </>
  )
}

export default AboutCourse