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
import { t } from 'i18next'



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
        Kursga yozilish
          <i class="fa-solid fa-arrow-right"></i>
        </a>
        <div className='header__wrap_link'>
          <img src={vidicon} alt="video-icon" />
          <a className='header__link_right' href="#"> 
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
      <button className='swiper__btn'>
      {t('course.btn2')}
        <i class="fa-solid fa-arrow-right"></i>
      </button>
      <div className='swiper__wrapper'>
        <p className='swiper__text'>
        {t('course.subtext1')}
        </p>
        <p className='swiper__text'>
        {t('course.subtext2')}
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
      <button className='swiper__btn'>
      {t('course.btn2')}
        <i class="fa-solid fa-arrow-right"></i>
      </button>
      <div className='swiper__wrapper'>
        <p className='swiper__text'>
        {t('course.subtext1')}
        </p>
        <p className='swiper__text'>
        4 ta modul
        </p>
      </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='swiper__card'>
        <i class="fa-brands fa-codepen"></i>
          <h3 className='swiper__title'>
            Frontend dasturlash
          </h3>
          <p className='swiper__text'>
          Veb-sahifa va veb-ilovalarning foydalanuvchiga koʻrinadigan qismini hosil qilish sohasidir.
          </p>
          <Accordion style={{background: "#15182F",textAlign:"center"}}>
        <AccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography style={{border: "1px solid var(--Kulrang-Stroka, #434343)",radius:"4px",color:"white",display:"flex",padding:"10px 20px", opacity:"0.8",margin:"0 auto"}}><h2 className='accardion__title'>Texnologiyalar</h2>
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
      <button className='swiper__btn'>
        Karta orqali to'lov
        <i class="fa-solid fa-arrow-right"></i>
      </button>
      <div className='swiper__wrapper'>
        <p className='swiper__text'>
        6 oy davomiyligi
        </p>
        <p className='swiper__text'>
        4 ta modul
        </p>
      </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='swiper__card'>
          <i class="fa-solid fa-code"></i>
          <h3 className='swiper__title'>
            Frontend dasturlash
          </h3>
          <p className='swiper__text'>
          Veb-sahifa va veb-ilovalarning foydalanuvchiga koʻrinadigan qismini hosil qilish sohasidir.
          </p>
          <Accordion style={{background: "#15182F",textAlign:"center"}}>
        <AccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography style={{border: "1px solid var(--Kulrang-Stroka, #434343)",radius:"4px",color:"white",display:"flex",padding:"10px 20px", opacity:"0.8",margin:"0 auto"}}><h2 className='accardion__title'>Texnologiyalar</h2>
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
      <button className='swiper__btn'>
        Karta orqali to'lov
        <i class="fa-solid fa-arrow-right"></i>
      </button>
      <div className='swiper__wrapper'>
        <p className='swiper__text'>
        6 oy davomiyligi
        </p>
        <p className='swiper__text'>
        4 ta modul
        </p>
      </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='swiper__card'>
        <i class="fa-solid fa-code-compare"></i>
          <h3 className='swiper__title'>
            Frontend dasturlash
          </h3>
          <p className='swiper__text'>
          Veb-sahifa va veb-ilovalarning foydalanuvchiga koʻrinadigan qismini hosil qilish sohasidir.
          </p>
          <Accordion style={{background: "#15182F",textAlign:"center"}}>
        <AccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography style={{border: "1px solid var(--Kulrang-Stroka, #434343)",radius:"4px",color:"white",display:"flex",padding:"10px 20px", opacity:"0.8",margin:"0 auto"}}><h2 className='accardion__title'>Texnologiyalar</h2>
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
      <button className='swiper__btn'>
        Karta orqali to'lov
        <i class="fa-solid fa-arrow-right"></i>
      </button>
      <div className='swiper__wrapper'>
        <p className='swiper__text'>
        6 oy davomiyligi
        </p>
        <p className='swiper__text'>
        4 ta modul
        </p>
      </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='swiper__card'>
        <i class="fa-brands fa-codepen"></i>
          <h3 className='swiper__title'>
            Frontend dasturlash
          </h3>
          <p className='swiper__text'>
          Veb-sahifa va veb-ilovalarning foydalanuvchiga koʻrinadigan qismini hosil qilish sohasidir.
          </p>
          <Accordion style={{background: "#15182F",textAlign:"center"}}>
        <AccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography style={{border: "1px solid var(--Kulrang-Stroka, #434343)",radius:"4px",color:"white",display:"flex",padding:"10px 20px", opacity:"0.8",margin:"0 auto"}}><h2 className='accardion__title'>Texnologiyalar</h2>
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
      <button className='swiper__btn'>
        Karta orqali to'lov
        <i class="fa-solid fa-arrow-right"></i>
      </button>
      <div className='swiper__wrapper'>
        <p className='swiper__text'>
        6 oy davomiyligi
        </p>
        <p className='swiper__text'>
        4 ta modul
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
      Keyingi qadam
      </h1>
      <p className='section__text'>
      Birinchi kursdan so'ng siz qaerga va qanday davom etishni tanlashingiz mumkin
      </p>
     <div className='section__wrap'>
      <div className='section__box'>
      <i class="fa-solid fa-briefcase"></i>
      <h3 className='section__name'>
      Bandlikga yordam berish
      </h3>
      <p className='section__text'>
      Bizning maqsadimiz sizga ta'lim va kasbiy rivojlanish maqsadlaringizni ro’yobga chiqaradigan va o’qish davomida yaxshi natijalar ko’rsatgan NetPro o’quv markazining muvaffaqiyatli bitiruvchilariga ishga joylashishda faol yordam beramiz.
      </p>
      <ul className='section__list'>
        <li className='section__item'>
          <h3 className='section__name'>Ish turi</h3>
          <p className='section__text'>Ofis ishi</p>
        </li>
        <li className='section__item'>
          <h3 className='section__name'>Ish haqqi</h3>
          <p className='section__text'>2 000 dan 7000 gacha</p>
        </li>
        <li className='section__item'>
          <h3 className='section__name'>Ish tajribasi</h3>
          <p className='section__text'>1 yildan 3yilgacha</p>
        </li>
      </ul>
      </div>

      <div className='section__box'>
      <i class="fa-solid fa-bag-shopping"></i>
      <h3 className='section__name'>
      Bandlikga yordam berish
      </h3>
      <p className='section__text'>
      Bizning maqsadimiz sizga ta'lim va kasbiy rivojlanish maqsadlaringizni ro’yobga chiqaradigan va o’qish davomida yaxshi natijalar ko’rsatgan NetPro o’quv markazining muvaffaqiyatli bitiruvchilariga ishga joylashishda faol yordam beramiz.
      </p>
      <ul className='section__list'>
        <li className='section__item'>
          <h3 className='section__name'>Ish turi</h3>
          <p className='section__text'>Ofis ishi</p>
        </li>
        <li className='section__item'>
          <h3 className='section__name'>Ish haqqi</h3>
          <p className='section__text'>2 000 dan 7000 gacha</p>
        </li>
        <li className='section__item'>
          <h3 className='section__name'>Ish tajribasi</h3>
          <p className='section__text'>1 yildan 3yilgacha</p>
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
          Kovorking
          </h1>
          <p className='kovorking__text'>
          Kovorking-bu talabalarimiz qo'shimcha ravishda mashq qilishlari va tajribali ma'murlar nazorati ostida uy vazifalarini bajarishlari uchun zarur bo'lgan barcha narsalar bilan jihozlangan ofis.
          </p>
          <ul className='kovorking__list'>
            <li className='kovorking__item'>
            <i class="fa-solid fa-book-open"></i>
            <p className='kovorking__text'>
            Uy vazifasini mashq qilish va bajarish
            </p>
            </li>
            <li className='kovorking__item'>
            <i class="fa-solid fa-user"></i>
            <p className='kovorking__text'>
            Uy vazifasini mashq qilish va bajarish
            </p>
            </li>
            <li className='kovorking__item'>
            <i class="fa-regular fa-comment-dots"></i>
            <p className='kovorking__text'>
            Uy vazifasini mashq qilish va bajarish
            </p>
            </li>
          </ul>
          <a className='header__link text-white py-5 px-7' href="#">
          Kursga yozilish
          <i class="fa-solid fa-arrow-right"></i>
        </a>
          </div>
    </div>

    {/* wrapper */}
    <div className='wrapper'>
      <div className='container'>
      <h1 className='about__title'>
      Mavjud vakansiyalar
      </h1>
      <ul className='wrapper__list'>
        <li className='wrapper__item'>
         <div className='wrapper__line'>
         <h3 className='wrapper__name'>3d model</h3>
         <p className='wrapper__text'>Toshkent shahar</p>
         </div>
          <p className='wrapper__text'>
          Biz jamoamizga yuqori malakali va tajribali 3D modellashtirish bo'yicha mutaxassisni qidirmoqdamiz. Ideal nomzod 3D modellashtirish texnikasi, dasturiy ta'minot va sanoatning eng yaxshi amaliyotlarini yaxshi bilishi kerak.
          </p>
          <a className='wrapper__link' href="#">
          <i class="fa-regular fa-comment"></i>
          Javob qoldirish
          </a>
        </li>
        <li className='wrapper__item'>
         <div className='wrapper__line'>
         <h3 className='wrapper__name'>3d model</h3>
         <p className='wrapper__text'>Toshkent shahar</p>
         </div>
          <p className='wrapper__text'>
          Biz jamoamizga yuqori malakali va tajribali 3D modellashtirish bo'yicha mutaxassisni qidirmoqdamiz. Ideal nomzod 3D modellashtirish texnikasi, dasturiy ta'minot va sanoatning eng yaxshi amaliyotlarini yaxshi bilishi kerak.
          </p>
          <a className='wrapper__link' href="#">
          <i class="fa-regular fa-comment"></i>
          Javob qoldirish
          </a>
        </li>
      </ul>
      <div className='wrapper__sub'>
       <div className='left'>
       <h1 className='about__title'>
        Kurs haqida video tanishtiruv
        </h1>
       </div>
       <div className='right'>
        <h3 className='wrapper__name_sub'>Bir marta to’lov qilib butun kursni sotib olish uchun quyidagi tugmani bosing!</h3>
        <a className='header__link text-white py-5 px-7' href="#">
          Kursga yozilish
          <i class="fa-solid fa-arrow-right"></i>
        </a>
       </div>
      </div>
      <iframe width="100%" height="600px" src="https://www.youtube.com/embed/hPbDyqzxQfU?si=Qx-myYGoSYkvymtf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
   

      </div>
       </div>

    {/* slider */}
    <div className='slider'>
      <div className='container'>
      <h1 className='about__title'>
        O'qituvchilarimiz
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
            Shaxlo Jo’raeva
            </h3>
            <p className='slider__text'>
            Dasturlash o’qituvhcisi
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='slider__card'>
            <img className='slider__img' src={teacher2} alt="teacher1" />
            <h3 className='slider__name'>
            Shaxlo Jo’raeva
            </h3>
            <p className='slider__text'>
            Dasturlash o’qituvhcisi
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='slider__card'>
            <img className='slider__img' src={teacher3} alt="teacher1" />
            <h3 className='slider__name'>
            Shaxlo Jo’raeva
            </h3>
            <p className='slider__text'>
            Dasturlash o’qituvhcisi
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='slider__card'>
            <img className='slider__img' src={teacher2} alt="teacher1" />
            <h3 className='slider__name'>
            Shaxlo Jo’raeva
            </h3>
            <p className='slider__text'>
            Dasturlash o’qituvhcisi
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
      Platformada o'qitish qanday amalga oshiriladi
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
            Gurux suxbati
            </h3>
          </div>
          <p className='cards__text'>
          Har bir mini-guruh uchun Telegram-da suhbat yaratiladi, unda talabalar barcha o'quv masalalarini muhokama qilishlari mumkin. Siz har doim o'qituvchidan tezkor fikr-mulohazalarni olishingiz yoki guruhingiz bilan suhbatlashishingiz mumkin.
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
            Gurux suxbati
            </h3>
          </div>
          <p className='cards__text'>
          Har bir mini-guruh uchun Telegram-da suhbat yaratiladi, unda talabalar barcha o'quv masalalarini muhokama qilishlari mumkin. Siz har doim o'qituvchidan tezkor fikr-mulohazalarni olishingiz yoki guruhingiz bilan suhbatlashishingiz mumkin.
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
            Gurux suxbati
            </h3>
          </div>
          <p className='cards__text'>
          Har bir mini-guruh uchun Telegram-da suhbat yaratiladi, unda talabalar barcha o'quv masalalarini muhokama qilishlari mumkin. Siz har doim o'qituvchidan tezkor fikr-mulohazalarni olishingiz yoki guruhingiz bilan suhbatlashishingiz mumkin.
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
            Gurux suxbati
            </h3>
          </div>
          <p className='cards__text'>
          Har bir mini-guruh uchun Telegram-da suhbat yaratiladi, unda talabalar barcha o'quv masalalarini muhokama qilishlari mumkin. Siz har doim o'qituvchidan tezkor fikr-mulohazalarni olishingiz yoki guruhingiz bilan suhbatlashishingiz mumkin.
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
            Gurux suxbati
            </h3>
          </div>
          <p className='cards__text'>
          Har bir mini-guruh uchun Telegram-da suhbat yaratiladi, unda talabalar barcha o'quv masalalarini muhokama qilishlari mumkin. Siz har doim o'qituvchidan tezkor fikr-mulohazalarni olishingiz yoki guruhingiz bilan suhbatlashishingiz mumkin.
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
            Gurux suxbati
            </h3>
          </div>
          <p className='cards__text'>
          Har bir mini-guruh uchun Telegram-da suhbat yaratiladi, unda talabalar barcha o'quv masalalarini muhokama qilishlari mumkin. Siz har doim o'qituvchidan tezkor fikr-mulohazalarni olishingiz yoki guruhingiz bilan suhbatlashishingiz mumkin.
          </p>
        </li>
      </ul>

      </div>
    </div>

    {/* questions */}
    <div className='question'>
      <div className='container'>
      <h1 className='about__title'>
      Tez-tez so’raladigan savollar
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
            Dasturchi bo’la olamanmi?
            </h3>
         
          </Typography>
        </AccordionSummary>
        <AccordionDetails>  
          <Typography>
            <div className='question__text'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur molestiae rem asperiores ex laudantium voluptate nulla ullam obcaecati laboriosam, beatae esse iure magnam nihil perferendis?
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
            Dasturchi bo’la olamanmi?
            </h3>
         
          </Typography>
        </AccordionSummary>
        <AccordionDetails>  
          <Typography>
            <div className='question__text'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur molestiae rem asperiores ex laudantium voluptate nulla ullam obcaecati laboriosam, beatae esse iure magnam nihil perferendis?
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
            Dasturchi bo’la olamanmi?
            </h3>
        
          </Typography>
        </AccordionSummary>
        <AccordionDetails>  
          <Typography>
            <div className='question__text'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur molestiae rem asperiores ex laudantium voluptate nulla ullam obcaecati laboriosam, beatae esse iure magnam nihil perferendis?
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
            Dasturchi bo’la olamanmi?
            </h3>
        
          </Typography>
        </AccordionSummary>
        <AccordionDetails>  
          <Typography>
            <div className='question__text'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur molestiae rem asperiores ex laudantium voluptate nulla ullam obcaecati laboriosam, beatae esse iure magnam nihil perferendis?
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
            Dasturchi bo’la olamanmi?
            </h3>
        
          </Typography>
        </AccordionSummary>
        <AccordionDetails>  
          <Typography>
            <div className='question__text'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur molestiae rem asperiores ex laudantium voluptate nulla ullam obcaecati laboriosam, beatae esse iure magnam nihil perferendis?
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
            Dasturchi bo’la olamanmi?
            </h3>

          </Typography>
        </AccordionSummary>
        <AccordionDetails>  
          <Typography>
            <div className='question__text'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur molestiae rem asperiores ex laudantium voluptate nulla ullam obcaecati laboriosam, beatae esse iure magnam nihil perferendis?
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
        </li>
      </ul>
      <div className='question__btn'>
      <a className='header__link text-white py-5 px-7' href="#">
          Kursga yozilish
          <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
      <div className='bottom'>
      <i class="fa-solid fa-comment-dots"></i>
      </div>

      </div>
      

    </div>






  
   
  
    </>
  )
}

export default AboutCourse