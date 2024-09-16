import React from 'react'
import ArrowSvg from '../../icons/ArrowSvg'
import { useTranslation } from 'react-i18next'

const MainModal = ({ setShowMainModal, showMainModal }) => {
    const {t} = useTranslation()
    const closeModal = () => {
        setShowMainModal(!showMainModal)
    }
    return (
        <div className='mainModal'>
            <div className='d-flex justify-content-end'>
                <button onClick={closeModal} className='border-0 fs-5 closeBtn'>X</button>
            </div>
            <h3 className='fw-bold text-center fs-2'>{t('mainModal.title')}</h3>
            <p className='modal_text text-center py-1'>{t('mainModal.text')}</p>
            <form id="contact-form">
                <div class="form-group px-5">
                    <label for="name">{t('mainModal.name')}</label> <br />
                    <input type="text" id="name" name="name" placeholder={t('mainModal.inputName')} required className='w-100 mainModalInput form-control' />
                </div>

                <div class="form-group px-5 py-1">
                    <label for="phone">{t('mainModal.phone')}</label> <br />
                    <input type="phone" id="phone" name="phone" placeholder='+998 (90) 123 45 67' required className='w-100 mainModalInput form-control' />
                </div>

                <div class="form-group px-5">
                    <label for="message">{t('mainModal.email')}</label> <br />
                    <input type="email" id="email" name="email" required className='w-100 mainModalInput form-control' placeholder={t('mainModal.inputEmail')} />
                </div>
                <div className='px-5 pb-5'>
                <button className='mainBtn text-white rounded-md d-flex align-items-center border-0 mt-4 w-100 justify-content-center'>{t('header.btn1')} <ArrowSvg /></button>
                </div>
                

            </form>
        </div>
    )
}

export default MainModal