import React from 'react'
import NumberImg1 from "../../assets/number1Img.png"
import NumberImg2 from "../../assets/number2Img.png"
import NumberImg3 from "../../assets/number3Img.png"
import NumberImg4 from "../../assets/number4Img.png"
import NumberImg5 from "../../assets/number5Img.png"
import NumberImg6 from "../../assets/number6Img.png"
import NumberImg7 from "../../assets/number7Img.png"
import NumberImg8 from "../../assets/number8Img.png"
import NumberImg9 from "../../assets/number9Img.png"
import { useTranslation } from 'react-i18next'
const NetPro = () => {
    const {t} = useTranslation()
    return (
        <div className='container'>
            <h3 className='ad_title fw-bold py-3'>{t('netPro.title')}</h3>
            <div className='d-flex align-items-center pt-3 pb-5 flex-wrap gap-4 justify-content-center'>
                <div className='netProCard'>
                    <div className='netProTop p-3 d-flex align-items-center gap-2'>
                        <img src={NumberImg1} />
                        <h4 className='ad_card_title'>{t('netPro.title01')}</h4>
                    </div>
                    <p className='ad_card_text p-3'>{t('netPro.text01')}</p>
                </div>
                <div className='netProCard'>
                    <div className='netProTop p-3 d-flex align-items-center gap-2'>
                        <img src={NumberImg2} />
                        <h4 className='ad_card_title'>{t('netPro.title02')}</h4>
                    </div>
                    <p className='ad_card_text p-3'>{t('netPro.text02')}</p>
                </div>
                <div className='netProCard'>
                    <div className='netProTop p-3 d-flex align-items-center gap-2'>
                        <img src={NumberImg3} />
                        <h4 className='ad_card_title'>{t('netPro.title03')}</h4>
                    </div>
                    <p className='ad_card_text p-3'>{t('netPro.text03')}</p>
                </div>
                <div className='netProCard'>
                    <div className='netProTop p-3 d-flex align-items-center gap-2'>
                        <img src={NumberImg4} />
                        <h4 className='ad_card_title'>{t('netPro.title04')}</h4>
                    </div>
                    <p className='ad_card_text p-3'>{t('netPro.text04')}</p>
                </div>
                <div className='netProCard'>
                    <div className='netProTop p-3 d-flex align-items-center gap-2'>
                        <img src={NumberImg5} />
                        <h4 className='ad_card_title'>{t('netPro.title05')}</h4>
                    </div>
                    <p className='ad_card_text p-3'>{t('netPro.text05')}</p>
                </div>
                <div className='netProCard'>
                    <div className='netProTop p-3 d-flex align-items-center gap-2'>
                        <img src={NumberImg6} />
                        <h4 className='ad_card_title'>{t('netPro.title06')}</h4>
                    </div>
                    <p className='ad_card_text p-3'>{t('netPro.text06')}</p>
                </div>
                <div className='netProCard'>
                    <div className='netProTop p-3 d-flex align-items-center gap-2'>
                        <img src={NumberImg7} />
                        <h4 className='ad_card_title'>{t('netPro.title07')}</h4>
                    </div>
                    <p className='ad_card_text p-3'>{t('netPro.text07')}</p>
                </div>
                <div className='netProCard'>
                    <div className='netProTop p-3 d-flex align-items-center gap-2'>
                        <img src={NumberImg8} />
                        <h4 className='ad_card_title'>{t('netPro.title08')}</h4>
                    </div>
                    <p className='ad_card_text p-3'>{t('netPro.text08')}</p>
                </div>
                <div className='netProCard'>
                    <div className='netProTop p-3 d-flex align-items-center gap-2'>
                        <img src={NumberImg9} />
                        <h4 className='ad_card_title'>{t('netPro.title09')}</h4>
                    </div>
                    <p className='ad_card_text p-3'>{t('netPro.text09')}</p>
                </div>
            </div>
        </div>
    )
}

export default NetPro