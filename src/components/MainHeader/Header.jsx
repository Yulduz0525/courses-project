import React from 'react'
import ArrowSvg from '../../icons/ArrowSvg'
import HeaderImg from "../../assets/headerimg.png"
import BtnVideoSvg from '../../icons/BtnVideoSvg'
import Slider from '../Slider/Slider'
const Header = () => {
    return (
        <>
        <div className='container d-flex align-items-center pt-4 pb-5'>
            <div className=''>
                <h1 className='text-white fw-bold header_title'>Kasbiy rivojlanish uchun o’quv kurslar</h1>
                <p className='text-white fs-6 text-[#FCFCFC] pt-2 pb-5'>Bizning it-kasbiy tayyorgarlik kursimizga yozilish orqali siz martaba istiqbollarini oshirishi mumkin bo'lgan sanoat tomonidan tan olingan sertifikatlarni olish imkoniyatiga ega bo'lasiz.</p>
                <div className='d-flex gap-3 align-items-center '>
                    <button className='mainBtn text-white rounded-md d-flex align-items-center border-0'>Kursga yozilish <ArrowSvg /></button>
                    <button className='d-flex align-items-center bg-transparent border-0 videoBtn'>
                        <BtnVideoSvg/>
                        <p className='btnText'>Kurs haqida video</p>
                    </button>
                </div>

            </div>
            <div>
                <img src={HeaderImg} />
            </div>
        </div>
        <Slider/>
        </>
        
    )
}

export default Header