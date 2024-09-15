import React, { useState } from 'react'
import ArrowSvg from '../../icons/ArrowSvg'
import AboutUsImg from "../../assets/AboutUsImg.png"
import MainModal from '../MainModal/MainModal'
const AboutUs = () => {
    const [showMainModal,setShowMainModal] = useState(false)
    const showModal = () =>{
        setShowMainModal(!showMainModal)
    }
    return (
        <div id='aboutUs' className='container'>
            <div className='pt-4 pb-5'>
                <h3 className='ad_title fw-bold'>Biz haqimizda</h3>
                <div className='d-flex align-items-center gap-5 aboutUs-wrapper py-5'>
                    <div className='about-us-content'>
                        <h3 className='select-course-title fs-3'>Biz kimmiz?</h3>
                        <p className='select-course-text pt-2 pb-5'>NetPro it School ta'lim markazi 2020 yildan beri faoliyat yuritib kelmoqda. Bizning markazimizda siz kompyuter savodxonligini, Front-end, Back-end, Smm, Scratch va Ingliz tilini o'rganish imkoniyatiga egasiz. Bizning o'quv markazimizda ushbu yo'nalishda o'qish uchun barcha sharoitlar yaratilgan va bizning ofislarimiz kompyuter uskunalari bilan jihozlangan. Bizning o'qituvchilarimiz o'z sohalarida malakali mutaxassislardir va sizga to'g'ri ta'lim olish uchun barcha kerakli tavsiyalarni beradi. Bizning darslarimiz asosan amaliyotga yo'naltirilgan, 20% nazariy fanlar va 80% amaliy jarayon.</p>
                        <div className='d-flex aboutUsBtnWrapper'>
                            <button onClick={showModal} className='mainBtn text-white rounded-md d-flex align-items-center border-0'>Kursga yozilish <ArrowSvg /></button>
                        </div>
                    </div>
                    <div className='about-us-content'>
                        <img className='aboutUsImg' src={AboutUsImg} alt="About us" />
                    </div>
                </div>
            </div>
            {
                showMainModal && <div className='mainModalWrapper'>
                    <MainModal setShowMainModal={setShowMainModal} showMainModal={showMainModal} />
                </div>
            }
        </div>
    )
}

export default AboutUs