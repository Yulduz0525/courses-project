import React, { useEffect, useState } from 'react'
import ArrowSvg from '../../icons/ArrowSvg'
import HeaderImg from "../../assets/headerimg.png"
import BtnVideoSvg from '../../icons/BtnVideoSvg'
import Slider from '../Slider/Slider'
import MainModal from '../MainModal/MainModal'
import { Link, useLocation } from 'react-router-dom'
import ChatSvg from '../../icons/ChatSvg'
import { useTranslation } from 'react-i18next'
const Header = () => {
    const location = useLocation();
    const { t } = useTranslation()
    useEffect(() => {
        if (location.hash) {
            setTimeout(() => {
                const element = document.getElementById(location.hash.substring(1));
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }, [location]);
    const [showMainModal, setShowMainModal] = useState(false)
    const showModal = () => {
        setShowMainModal(!showMainModal)
    }
    return (
        <>
            <div id='header' className='container header d-flex align-items-center pb-5'>
                <div>
                    <h1 className='text-white fw-bold header_title'>{t('header.mainTitle')}</h1>
                    <p className='text-white fs-6 text-[#FCFCFC] pt-2 pb-5 header_text'>{t('header.additionalText')}</p>
                    <div className='d-flex gap-3 align-items-center btnWrapper'>
                        <button onClick={showModal} className='mainBtn text-white rounded-md d-flex align-items-center border-0'>{t('header.btn1')}<ArrowSvg /></button>
                        <Link to="/aboutCours#courses-video" className='text-decoration-none'>
                            <button className='d-flex align-items-center bg-transparent border-0 videoBtn'>
                                <BtnVideoSvg />
                                <p className='btnText'>{t('header.btn2')}</p>
                            </button>
                        </Link>
                    </div>

                </div>
                <div>
                    <img src={HeaderImg} alt='header-img' className='header_img' />
                </div>
            </div>
            <Slider />
            {
                showMainModal && <div className='mainModalWrapper'>
                    <MainModal setShowMainModal={setShowMainModal} showMainModal={showMainModal} />
                </div>
            }
            <div className='chatBtnWrapper'>
                <button className='Chat'>
                    <ChatSvg />
                </button>
            </div>
        </>

    )
}

export default Header