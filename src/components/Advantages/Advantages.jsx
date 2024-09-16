import React, { useState } from 'react'
import AdImg1 from '../../assets/ad-img1.png'
import AdImg2 from '../../assets/ad-img2.png'
import AdImg3 from '../../assets/ad-img3.png'
import AdImg4 from '../../assets/ad-img4.png'
import AdImg5 from '../../assets/ad-img5.png'
import AdImg6 from '../../assets/ad-img6.png'
import AdImg7 from '../../assets/ad-img7.png'
import AdImg8 from '../../assets/ad-img8.png'
import AdImg9 from '../../assets/ad-img9.png'
import AdImg10 from '../../assets/ad-img10.png'
import AdImg11 from '../../assets/ad-img11.png'
import AdImg12 from '../../assets/ad-img12.png'
import AdImg13 from '../../assets/ad-img13.png'
import AdImg14 from '../../assets/ad-img14.png'
import AdImg15 from '../../assets/ad-img15.png'
import ArrowSvg from '../../icons/ArrowSvg'
import TimeSvg from '../../icons/TimeSvg'
import MainModal from '../MainModal/MainModal'
import { useTranslation } from 'react-i18next'
const Advantages = () => {
    const [showMainModal, setShowMainModal] = useState(false)
    const {t} = useTranslation()
    const showModal = () => {
        setShowMainModal(!showMainModal)
    }
    return (
        <div className='container'>
            <div className='py-4'>
                <h3 className='ad_title fw-bold'>{t('advantages.title')}</h3>
                <p className='ad_text'>{t('advantages.additionalText')}</p>
                <div className='d-flex flex-wrap gap-5 py-5 justify-content-center'>
                    <div className='ad-card p-4 col-br'>
                        <img src={AdImg1} />
                        <div>
                            <h4 className='ad_card_title'>
                                {t('advantages.card1Title')}
                            </h4>
                            <p className='ad_card_text'>{t('advantages.card1Text')}</p>
                        </div>
                    </div>
                    <div className='ad-card p-4 col-br'>
                        <img src={AdImg2} />
                        <div>
                            <h4 className='ad_card_title'>
                                {t('advantages.card2Title')}
                            </h4>
                            <p className='ad_card_text'>{t('advantages.card2Text')}</p>
                        </div>
                    </div>
                    <div className='ad-card p-4 col-br'>
                        <img src={AdImg3} />
                        <div>
                            <h4 className='ad_card_title'>
                                {t('advantages.card3Title')}
                            </h4>
                            <p className='ad_card_text'>{t('advantages.card3Text')}</p>
                        </div>
                    </div>
                    <div className='ad-card p-4 col-br'>
                        <img src={AdImg4} />
                        <div>
                            <h4 className='ad_card_title'>
                                {t('advantages.card4Title')}
                            </h4>
                            <p className='ad_card_text'>{t('advantages.card4Text')}</p>
                        </div>
                    </div>
                    <div className='ad-card p-4 col-br'>
                        <img src={AdImg5} />
                        <div>
                            <h4 className='ad_card_title'>
                                {t('advantages.card5Title')}
                            </h4>
                            <p className='ad_card_text'>{t('advantages.card5Text')}</p>
                        </div>
                    </div>
                    <div className='ad-card p-4 col-br'>
                        <img src={AdImg6} />
                        <div>
                            <h4 className='ad_card_title'>
                                {t('advantages.card6Title')}
                            </h4>
                            <p className='ad_card_text'>{t('advantages.card6Text')}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pt-3 pb-5 '>
                <div className='select-course d-flex align-items-center gap-5'>
                    <div>
                        <h2 className='select-course-title fw-bold'>{t('advantages.title2')}</h2>
                        <p className='select-course-text pt-2 pb-5'>{t('advantages.text')}</p>
                        <div className='course-s-btnWrapper d-flex'>
                            <button onClick={showModal} className='mainBtn text-white rounded-md d-flex align-items-center border-0'>{t('header.btn1')}<ArrowSvg /></button>
                        </div>

                    </div>
                    <div className='d-flex flex-column justify-content-center gap-3'>
                        <div className='d-flex align-items-center gap-3'>
                            <img className='select-course-img1' src={AdImg7} />
                            <img className='select-course-img2' src={AdImg8} />
                        </div>
                        <img className='select-course-img3' src={AdImg9} />
                    </div>
                </div>

            </div>
            <div id='coursesInDirections' className='py-5'>
                <h2 className='select-course-title fw-bold text-center'>{t('advantages.title3')}</h2>
                <p className='select-course-text pt-2 pb-5 text-center'>{t('advantages.text2')}</p>
                <div className='d-flex flex-wrap ad-bottom justify-content-center'>
                    <div className='ad-bottom-card p-3'>
                        <div className='d-flex gap-2 align-items-center'>
                            <img src={AdImg10} />
                            <h3 className='ad_card_title'>{t('advantages.frontend')}</h3>
                        </div>
                        <p className='ad_card_text'>{t('advantages.frontendText')}</p>
                    </div>
                    <div className='ad-bottom-card p-3'>
                        <div className='d-flex gap-2 align-items-center'>
                            <img src={AdImg11} />
                            <h3 className='ad_card_title'>{t('advantages.dizayn')}</h3>
                        </div>
                        <p className='ad_card_text'>{t('advantages.dizaynText')}</p>
                    </div>
                    <div className='ad-bottom-card3 p-3'>
                        <div className='d-flex gap-2 align-items-center'>
                            <img src={AdImg12} />
                            <h3 className='ad_card_title'>{t('advantages.3dmax')}</h3>
                        </div>
                        <p className='ad_card_text'>{t('advantages.3dmaxText')}</p>
                    </div>
                    <div className='ad-bottom-card2 ad-bottom-card5 p-3'>
                        <div className='d-flex gap-2 align-items-center'>
                            <img src={AdImg13} />
                            <h3 className='ad_card_title'>{t('advantages.backend')}</h3>
                        </div>
                        <p className='ad_card_text'>{t('advantages.backendText')}</p>
                    </div>
                    <div className='ad-bottom-card2 ad-bottom-card6 p-3'>
                        <div className='d-flex gap-2 align-items-center'>
                            <img src={AdImg14} />
                            <h3 className='ad_card_title'>{t('advantages.kpSavodxonligi')}</h3>
                        </div>
                        <p className='ad_card_text'>{t('advantages.kpSavodxonligiText')}</p>
                    </div>
                    <div className='ad-bottom-card4 p-3'>
                        <div className='d-flex gap-2 align-items-center'>
                            <img src={AdImg15} />
                            <h3 className='ad_card_title'>{t('advantages.scratch')}</h3>
                        </div>
                        <p className='ad_card_text'>{t('advantages.scratchText')}</p>
                    </div>
                </div>
                <div className='d-flex gap-3 align-items-center btnWrapper py-3 px-4'>
                    <button className='mainBtn text-white rounded-md d-flex align-items-center border-0'>{t('advantages.batafsilBtn')}<ArrowSvg /></button>
                    <button className='d-flex align-items-center bg-transparent border-0 videoBtn gap-2'>
                        <TimeSvg />
                        <p className='text-white '>{t('advantages.coursesBtn')}</p>
                    </button>
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

export default Advantages