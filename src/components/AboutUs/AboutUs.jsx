import React, { useState } from 'react'
import ArrowSvg from '../../icons/ArrowSvg'
import AboutUsImg from "../../assets/AboutUsImg.png"
import MainModal from '../MainModal/MainModal'
import { useTranslation } from 'react-i18next'
const AboutUs = () => {
    const [showMainModal,setShowMainModal] = useState(false)
    const {t} = useTranslation()
    const showModal = () =>{
        setShowMainModal(!showMainModal)
    }
    return (
        <div id='aboutUs' className='container'>
            <div className='pt-4 pb-5'>
                <h3 className='ad_title fw-bold'>{t('aboutUs.title')}</h3>
                <div className='d-flex align-items-center gap-5 aboutUs-wrapper py-5'>
                    <div className='about-us-content'>
                        <h3 className='select-course-title fs-3'>{t('aboutUs.title2')}</h3>
                        <p className='select-course-text pt-2 pb-5'>{t('aboutUs.text')}</p>
                        <div className='d-flex aboutUsBtnWrapper'>
                            <button onClick={showModal} className='mainBtn text-white rounded-md d-flex align-items-center border-0'>{t('header.btn1')} <ArrowSvg /></button>
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