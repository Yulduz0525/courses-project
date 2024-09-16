import React from 'react'
import './AboutCourse.css'
import backg from '../../assets/backg.png'
import vidicon from '../../assets/vidicon.png'
import kovorking from '../../assets/covorking.png'
import teacher1 from '../../assets/teacher1.png'
import teacher2 from '../../assets/teacher2.png'
import teacher3 from '../../assets/teacher3.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'
import { Navigation, Pagination } from 'swiper/modules';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../../components/PriceModal/Modal'
import { t } from 'i18next'
import logo from '../../assets/logo.png'

const AboutCourse = () => {
  const backgroundStyle = {
    backgroundImage: `url(${backg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "650px", 
    width: "100%", 
  };
  
  return (
    <>
 
   {/* Header */}
    <div className='header text-center'style={backgroundStyle}>
     <div className='container header__container'>
     <h1 className='header__title text-6xl text-white font-bold'>
        {t('header.title')}</h1>
      <div className='header__wrap flex my-0 mx-auto w-1/2'> 
        <a className='mainBtn text-white rounded-md d-flex align-items-center border-0 text-decoration-none' href="#">
        {t('header.btn1')}
          <i class="fa-solid fa-arrow-right"></i>
        </a>
        <div className='d-flex align-items-center bg-transparent border-0 videoBtn'>
          <img src={vidicon} alt="video-icon" />
         <a className='btnText' href="#"> 
         {t('header.btn2')}
            </a>
        </div>
      </div>
     </div>
    </div>

    {/* Course */}
    <div className='course'>
      <div className='container'>
      <h2 className='about__title'>
        {t('course.title')}
        </h2>
        <Swiper
        style={{paddingTop:"50px", paddingBottom:"80px"}}
        loop={true}
        navigation={true}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation,Pagination]}
        breakpoints={{
          640: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3.5,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='swiper__card'>
          <i class="fa-solid fa-code"></i>
          <h3 className='swiper__title'>
          {t('course.name1')}
          </h3>
          <p className='swiper__text'>
          {t('course.tex1')}
          </p>
          <Accordion style={{background: "#15182F",textAlign:"center"}}>
        <AccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography style={{border: "1px solid var(--Kulrang-Stroka, #434343)",radius:"4px",color:"white",display:"flex",padding:"10px 20px", opacity:"0.8",margin:"0 auto"}}><h2 className='accardion__title'>{t('course.btn1')}</h2>
          {<ArrowDropDownIcon />}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>  
          <Typography>
            <div className='accardion__div'>
              <p className='accardion__text'>Frontend React</p>
              <p className='accardion__text'>Frontend NextJs</p>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <button class='swiper__btn' type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal">
      {t('course.btn2')}
        <i class="fa-solid fa-arrow-right"></i>
      </button>
      <div className='swiper__wrapper'>
        <p className='swiper__text'>
        {t('course.subtxt1')}
        </p>
        <p className='swiper__text'>
        {t('course.subtxt2')}
        </p>
      </div>
          </div>

        </SwiperSlide>
        <SwiperSlide>
        <div className='swiper__card'>
        <i class="fa-solid fa-code-compare"></i>
          <h3 className='swiper__title'>
          {t('course.name2')}
          </h3>
          <p className='swiper__text'>
          {t('course.text2')}
          </p>
          <Accordion style={{background: "#15182F",textAlign:"center"}}>
        <AccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography style={{border: "1px solid var(--Kulrang-Stroka, #434343)",radius:"4px",color:"white",display:"flex",padding:"10px 20px", opacity:"0.8",margin:"0 auto"}}><h2 className='accardion__title'>{t('course.btn1')}</h2>
          {<ArrowDropDownIcon />}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>  
          <Typography>
            <div className='accardion__div'>
              <p className='accardion__text'>Frontend React</p>
              <p className='accardion__text'>Frontend NextJs</p>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <button class='swiper__btn' type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal">
      {t('course.btn2')}
        <i class="fa-solid fa-arrow-right"></i>
      </button>
      <div className='swiper__wrapper'>
        <p className='swiper__text'>
        {t('course.subtxt1')}
        </p>
        <p className='swiper__text'>
        {t('course.subtxt2')}
        </p>
      </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='swiper__card'>
        <i class="fa-brands fa-codepen"></i>
          <h3 className='swiper__title'>
          {t('course.name3')}
          </h3>
          <p className='swiper__text'>
          {t('course.text3')}
          </p>
          <Accordion style={{background: "#15182F",textAlign:"center"}}>
        <AccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography style={{border: "1px solid var(--Kulrang-Stroka, #434343)",radius:"4px",color:"white",display:"flex",padding:"10px 20px", opacity:"0.8",margin:"0 auto"}}><h2 className='accardion__title'> {t('course.btn1')}</h2>
          {<ArrowDropDownIcon />}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>  
          <Typography>
            <div className='accardion__div'>
              <p className='accardion__text'>Frontend React</p>
              <p className='accardion__text'>Frontend NextJs</p>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <button class='swiper__btn' type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal">
      {t('course.btn2')}
        <i class="fa-solid fa-arrow-right"></i>
      </button>
      <div className='swiper__wrapper'>
        <p className='swiper__text'>
        {t('course.subtxt1')}
        </p>
        <p className='swiper__text'>
        {t('course.subtxt2')}
        </p>
      </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='swiper__card'>
          <i class="fa-solid fa-code"></i>
          <h3 className='swiper__title'>
          {t('course.name1')}
          </h3>
          <p className='swiper__text'>
          {t('course.text1')}
          </p>
          <Accordion style={{background: "#15182F",textAlign:"center"}}>
        <AccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography style={{border: "1px solid var(--Kulrang-Stroka, #434343)",radius:"4px",color:"white",display:"flex",padding:"10px 20px", opacity:"0.8",margin:"0 auto"}}><h2 className='accardion__title'> {t('course.btn1')}</h2>
          {<ArrowDropDownIcon />}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>  
          <Typography>
            <div className='accardion__div'>
              <p className='accardion__text'>Frontend React</p>
              <p className='accardion__text'>Frontend NextJs</p>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <button class='swiper__btn' type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal">
      {t('course.btn2')}
        <i class="fa-solid fa-arrow-right"></i>
      </button>
      <div className='swiper__wrapper'>
        <p className='swiper__text'>
        {t('course.subtxt1')}
        </p>
        <p className='swiper__text'>
        {t('course.subtxt2')}
        </p>
      </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='swiper__card'>
        <i class="fa-solid fa-code-compare"></i>
          <h3 className='swiper__title'>
          {t('course.name2')}
          </h3>
          <p className='swiper__text'>
          {t('course.text2')}
          </p>
          <Accordion style={{background: "#15182F",textAlign:"center"}}>
        <AccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography style={{border: "1px solid var(--Kulrang-Stroka, #434343)",radius:"4px",color:"white",display:"flex",padding:"10px 20px", opacity:"0.8",margin:"0 auto"}}><h2 className='accardion__title'> {t('course.btn1')}</h2>
          {<ArrowDropDownIcon />}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>  
          <Typography>
            <div className='accardion__div'>
              <p className='accardion__text'>Frontend React</p>
              <p className='accardion__text'>Frontend NextJs</p>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <button class='swiper__btn' type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal">
      {t('course.btn2')}
        <i class="fa-solid fa-arrow-right"></i>
      </button>
      <div className='swiper__wrapper'>
        <p className='swiper__text'>
        {t('course.subtxt1')}
        </p>
        <p className='swiper__text'>
        {t('course.subtxt2')}
        </p>
      </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='swiper__card'>
        <i class="fa-brands fa-codepen"></i>
          <h3 className='swiper__title'>
          {t('course.name3')}
          </h3>
          <p className='swiper__text'>
          {t('course.text3')}
          </p>
          <Accordion style={{background: "#15182F",textAlign:"center"}}>
        <AccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography style={{border: "1px solid var(--Kulrang-Stroka, #434343)",radius:"4px",color:"white",display:"flex",padding:"10px 20px", opacity:"0.8",margin:"0 auto"}}><h2 className='accardion__title'> {t('course.btn1')}</h2>
          {<ArrowDropDownIcon />}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>  
          <Typography>
            <div className='accardion__div'>
              <p className='accardion__text'>Frontend React</p>
              <p className='accardion__text'>Frontend NextJs</p>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <button class='swiper__btn' type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal">
      {t('course.btn2')}
        <i class="fa-solid fa-arrow-right"></i>
      </button>
      <div className='swiper__wrapper'>
        <p className='swiper__text'>
        {t('course.subtxt1')}
        </p>
        <p className='swiper__text'>
        {t('course.subtxt2')}
        </p>
      </div>
          </div>
        </SwiperSlide>
      </Swiper>

      </div>
    </div>

    {/* section */}
    <div className='section'>
      <div className='container'>
      <h1 className='about__title'>
     {t('section.title')}
      </h1>
      <p className='section__text'>
      {t('section.name')}
      </p>
     <div className='section__wrap'>
      <div className='section__box'>
      <i class="fa-solid fa-briefcase"></i>
      <h3 className='section__name'>
      {t('section.cardtitle1')}
      </h3>
      <p className='section__text'>
      {t('section.text1')}
      </p>
      <ul className='section__list'>
        <li className='section__item'>
          <h3 className='section__name'>{t('section.subtxt1')}</h3>
          <p className='section__text'>{t('section.subtxt2')}</p>
        </li>
        <li className='section__item'>
          <h3 className='section__name'>{t('section.subtxt3')}</h3>
          <p className='section__text'>{t('section.subtxt4')}</p>
        </li>
        <li className='section__item'>
          <h3 className='section__name'>{t('section.subtxt5')}</h3>
          <p className='section__text'>{t('section.subtxt6')}</p>
        </li>
      </ul>
      </div>

      <div className='section__box'>
      <i class="fa-solid fa-bag-shopping"></i>
      <h3 className='section__name'>
      {t('section.cardtitle2')}
      </h3>
      <p className='section__text'>
      {t('section.text2')}
      </p>
      <ul className='section__list'>
        <li className='section__item'>
          <h3 className='section__name'>{t('section.subtxt1')}</h3>
          <p className='section__text'>{t('section.subtxt2')}</p>
        </li>
        <li className='section__item'>
          <h3 className='section__name'>{t('section.subtxt3')}</h3>
          <p className='section__text'>{t('section.subtxt4')}</p>
        </li>
        <li className='section__item'>
          <h3 className='section__name'>{t('section.subtxt5')}</h3>
          <p className='section__text'>{t('section.subtxt6')}</p>
        </li>
      </ul>
      </div>
     </div>

      </div>
    </div>
    {/* kovorking */}
    <div className='kovorking'  style={{
        width: '100%',
        height: '600px',
        backgroundImage: `url(${kovorking})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        // position:'absolute',
        right:'0',
        left:'0'
        }}>
          <div className='kovorking__container'>
          <h1 className='about__title'>
          {t('kovorking.title')}
          </h1>
          <p className='kovorking__text'>
          {t('kovorking.text')}
          </p>
          <ul className='kovorking__list'>
            <li className='kovorking__item'>
            <i class="fa-solid fa-book-open"></i>
            <p className='kovorking__text'>
            {t('kovorking.kovorking__text1')}
            </p>
            </li>
            <li className='kovorking__item'>
            <i class="fa-solid fa-user"></i>
            <p className='kovorking__text'>
            {t('kovorking.kovorking__text2')}
            </p>
            </li>
            <li className='kovorking__item'>
            <i class="fa-regular fa-comment-dots"></i>
            <p className='kovorking__text'>
            {t('kovorking.kovorking__text3')}
            </p>
            </li>
          </ul>
          <div className='btn'>
          <a className='mainBtn text-white rounded-md d-flex align-items-center border-0 text-decoration-none' href="#">
          {t('header.btn1')}
          <i class="fa-solid fa-arrow-right"></i>
        </a>
          </div>
          </div>
    </div>

    {/* wrapper */}
    <div className='wrapper'>
      <div className='container'>
      <h1 className='about__title'>
      {t('wrapper.title')}
      </h1>
      <ul className='wrapper__list'>
        <li className='wrapper__item'>
         <div className='wrapper__line'>
         <h3 className='wrapper__name'>{t('wrapper.name1')}</h3>
         <p className='wrapper__text'>{t('wrapper.text3')}</p>
         </div>
          <p className='wrapper__text'>
          {t('wrapper.text1')}
          </p>
          <a className='wrapper__link' href="#">
          <i class="fa-regular fa-comment"></i>
          {t('wrapper.text4')}
          </a>
        </li>
        <li className='wrapper__item'>
         <div className='wrapper__line'>
         <h3 className='wrapper__name'>{t('wrapper.name2')}</h3>
         <p className='wrapper__text'>{t('wrapper.text3')}</p>
         </div>
          <p className='wrapper__text'>
          {t('wrapper.text2')}
          </p>
          <a className='wrapper__link' href="#">
          <i class="fa-regular fa-comment"></i>
          {t('wrapper.text4')}
          </a>
        </li>
      </ul>
      <div className='wrapper__sub'>
       <div className='left'>
       <h1 className='about__title'>
       {t('wrapper.subtitle1')}
        </h1>
       </div>
       <div className='right'>
        <h3 className='wrapper__name_sub'>{t('wrapper.subtitle2')}</h3>
       <div className='btn'>
       <a className='mainBtn text-white rounded-md d-flex align-items-center border-0 text-decoration-none' href="#">
       {t('header.btn1')}
          <i class="fa-solid fa-arrow-right"></i>
        </a>
       </div>
       </div>
      </div>
      <div id='courses-video'>
      <iframe width="100%" height="600px" src="https://www.youtube.com/embed/hPbDyqzxQfU?si=Qx-myYGoSYkvymtf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      
   

      </div>
       </div>

    {/* slider */}
    <div className='slider'>
      <div className='container'>
      <h1 className='about__title'>
      {t('slider.title')}
      </h1>
      <Swiper
      loop={true}
      navigation={true}
      slidesPerView={1}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation,Pagination]}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
        className="mySwiper"
      >
    
        <SwiperSlide>
          <div className='slider__card'>
            <img className='slider__img' src={teacher1} alt="teacher1" />
            <h3 className='slider__name'>
            {t('slider.name1')}
            </h3>
            <p className='slider__text'>
            {t('slider.text1')}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='slider__card'>
            <img className='slider__img' src={teacher2} alt="teacher1" />
            <h3 className='slider__name'>
            {t('slider.name2')}
            </h3>
            <p className='slider__text'>
            {t('slider.text2')}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='slider__card'>
            <img className='slider__img' src={teacher3} alt="teacher1" />
            <h3 className='slider__name'>
            {t('slider.name3')}
            </h3>
            <p className='slider__text'>
            {t('slider.text3')}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='slider__card'>
            <img className='slider__img' src={teacher2} alt="teacher1" />
            <h3 className='slider__name'>
            {t('slider.name2')}
            </h3>
            <p className='slider__text'>
            {t('slider.text2')}
            </p>
          </div>
        </SwiperSlide>
      </Swiper>

      </div>
    </div>

    {/* cards */}

    <div className='cards'>
      <div className='container'>
      <h1 className='about__title'>
      {t('cards.title')}
      </h1>
      <ul className='cards__list'>
        <li className='cards__item'>
          <div className='cards__top'>
            <div className='top'>
            <h2 className='number'>
              01
            </h2>
            </div>
            <h3 className='cards__name'>
            {t('cards.name1')}
            </h3>
          </div>
          <p className='cards__text'>
          {t('cards.text1')}
          </p>
        </li>
        <li className='cards__item'>
          <div className='cards__top'>
            <div className='top'>
            <h2 className='number'>
              02
            </h2>
            </div>
            <h3 className='cards__name'>
            {t('cards.name2')}
            </h3>
          </div>
          <p className='cards__text'>
          {t('cards.text2')}
          </p>
        </li>
        <li className='cards__item'>
          <div className='cards__top'>
            <div className='top'>
            <h2 className='number'>
              03
            </h2>
            </div>
            <h3 className='cards__name'>
            {t('cards.name3')}
            </h3>
          </div>
          <p className='cards__text'>
          {t('cards.text3')}
          </p>
        </li>
        <li className='cards__item'>
          <div className='cards__top'>
            <div className='top'>
            <h2 className='number'>
              04
            </h2>
            </div>
            <h3 className='cards__name'>
            {t('cards.name4')}
            </h3>
          </div>
          <p className='cards__text'>
          {t('cards.text4')}
          </p>
        </li>
        <li className='cards__item'>
          <div className='cards__top'>
            <div className='top'>
            <h2 className='number'>
              05
            </h2>
            </div>
            <h3 className='cards__name'>
            {t('cards.name5')}
            </h3>
          </div>
          <p className='cards__text'>
          {t('cards.text5')}
          </p>
        </li>
        <li className='cards__item'>
          <div className='cards__top'>
            <div className='top'>
            <h2 className='number'>
              06
            </h2>
            </div>
            <h3 className='cards__name'>
            {t('cards.name6')}
            </h3>
          </div>
          <p className='cards__text'>
          {t('cards.text6')}
          </p>
        </li>
      </ul>

      </div>
    </div>

    {/* questions */}
    <div className='question'>
      <div className='container'>
      <h1 className='about__title'>
      {t('question.title')}
      </h1>
      <ul className='question__list'>
       
        <li className='question__item'>
        <Accordion style={{background: "#15182F",textAlign:"center"}}>
        <AccordionSummary
        expandIcon={<ExpandMoreIcon style={{color:"white",fontSize:"30px"}} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography >
            <h3 className='question__name'>
            {t('question.name1')}
            </h3>
         
          </Typography>
        </AccordionSummary>
        <AccordionDetails>  
          <Typography>
            <div className='question__text'>
            {t('question.text')}
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
        </li>
        <li className='question__item'>
        <Accordion style={{background: "#15182F",textAlign:"center"}}>
        <AccordionSummary
        expandIcon={<ExpandMoreIcon style={{color:"white",fontSize:"30px"}} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography >
            <h3 className='question__name'>
            {t('question.name2')}
            </h3>
         
          </Typography>
        </AccordionSummary>
        <AccordionDetails>  
          <Typography>
            <div className='question__text'>
            {t('question.text')}
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
        </li>
        <li className='question__item'>
        <Accordion style={{background: "#15182F",textAlign:"center"}}>
        <AccordionSummary
        expandIcon={<ExpandMoreIcon style={{color:"white",fontSize:"30px"}} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography >
            <h3 className='question__name'>
            {t('question.name3')}
            </h3>
        
          </Typography>
        </AccordionSummary>
        <AccordionDetails>  
          <Typography>
            <div className='question__text'>
            {t('question.text')}
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
        </li>
        <li className='question__item'>
        <Accordion style={{background: "#15182F",textAlign:"center"}}>
        <AccordionSummary
        expandIcon={<ExpandMoreIcon style={{color:"white",fontSize:"30px"}} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography >
            <h3 className='question__name'>
            {t('question.name4')}
            </h3>
        
          </Typography>
        </AccordionSummary>
        <AccordionDetails>  
          <Typography>
            <div className='question__text'>
            {t('question.text')}
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
        </li>
        <li className='question__item'>
        <Accordion style={{background: "#15182F",textAlign:"center"}}>
        <AccordionSummary
        expandIcon={<ExpandMoreIcon style={{color:"white",fontSize:"30px"}} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography >
            <h3 className='question__name'>
            {t('question.name5')}
            </h3>
        
          </Typography>
        </AccordionSummary>
        <AccordionDetails>  
          <Typography>
            <div className='question__text'>
            {t('question.text')}
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
        </li>
        <li className='question__item'>
        <Accordion style={{background: "#15182F",textAlign:"center"}}>
        <AccordionSummary
        expandIcon={<ExpandMoreIcon style={{color:"white",fontSize:"30px"}} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography >
            <h3 className='question__name'>
            {t('question.name6')}
            </h3>

          </Typography>
        </AccordionSummary>
        <AccordionDetails>  
          <Typography>
            <div className='question__text'>
            {t('question.text')}
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
        </li>
      </ul>
      <div className='question__btn'>
      <div className='btn'>
      <a className='mainBtn text-white rounded-md d-flex align-items-center border-0 text-decoration-none' href="#">
          {t('header.btn1')}
          <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
      </div>
      <div className='bottom'>
      <i class="fa-solid fa-comment-dots"></i>
      </div>

      </div>
      

    </div>
{/* Modal price */}

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <img className='logo' src={logo} alt="logo" />
      <div class="modal-body" style={{textAlign:"center"}}>
        <form className='modal__form' action="modal__form" >
          <label>ID raqami</label><br />
          <input type="text" placeholder='000/000' /><br />
          <label>To'lov miqdori</label><br />
          <input type="text"placeholder='10 000' />
        </form>

        
      </div>
      <div class="modal-footer">
      <div className='modal__btn'>
      <a className='mainBtn text-white rounded-md d-flex align-items-center border-0 text-decoration-none' href="#">
        To'lov uchun
          <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
       
      </div>
    </div>
  </div>
</div>







  
   
  
    </>
  )
}

export default AboutCourse