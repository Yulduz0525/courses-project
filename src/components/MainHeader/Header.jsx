import React from 'react'
import ArrowSvg from '../../icons/ArrowSvg'
import HeaderImg from "../../assets/headerimg.png"
import BtnVideoSvg from '../../icons/BtnVideoSvg'
const Header = () => {
    return (
        <div className='flex items-center' style={{padding:"60px 0"}}>
            <div style={{width:"50%"}}>
                <h1 className='text-white font-bold' style={{fontSize:"58px",fontWeight:"700"}}>Kasbiy rivojlanish uchun o’quv kurslar</h1>
                <p className='text-white' style={{fontWeight:"400",fontSize:"18px",margin:"10px 0 25px 0"}}>Bizning it-kasbiy tayyorgarlik kursimizga yozilish orqali siz martaba istiqbollarini oshirishi mumkin bo'lgan sanoat tomonidan tan olingan sertifikatlarni olish imkoniyatiga ega bo'lasiz.</p>
                <div className='flex gap-6'>
                    <button className='mainBtn text-white rounded-md flex items-center'>Kursga yozilish <ArrowSvg /></button>
                    <button className='flex items-center gap-[5px]' style={{gap:"5px",marginLeft:"55px"}}>
                        <BtnVideoSvg/>
                        <p className='btnText'>Kurs haqida video</p>
                    </button>
                </div>

            </div>
            <div>
                <img src={HeaderImg} />
            </div>
        </div>
    )
}

export default Header