import React from 'react'
import ArrowSvg from '../../icons/ArrowSvg'

const MainModal = ({ setShowMainModal, showMainModal }) => {
    const closeModal = () => {
        setShowMainModal(!showMainModal)
    }
    return (
        <div className='mainModal'>
            <div className='d-flex justify-content-end'>
                <button onClick={closeModal} className='border-0 fs-5 closeBtn'>X</button>
            </div>
            <h3 className='fw-bold text-center fs-2'>Ro’yxatdan o’tish</h3>
            <p className='modal_text text-center'>Tasdiqlash kodi ko’rsatilgan <br /> raqamga bepul SMS orqali <br /> yuboriladi</p>
            <form id="contact-form">
                <div class="form-group px-5">
                    <label for="name">Ism</label> <br />
                    <input type="text" id="name" name="name" placeholder='000/000' required className='w-100 mainModalInput form-control' />
                </div>

                <div class="form-group px-5">
                    <label for="phone">Telefon raqam</label> <br />
                    <input type="phone" id="phone" name="phone" placeholder='+998 (90) 123 45 67' required className='w-100 mainModalInput form-control' />
                </div>

                <div class="form-group px-5">
                    <label for="message">Email</label> <br />
                    <input type="email" id="email" name="email" required className='w-100 mainModalInput form-control' placeholder='Emailingizni kiriting' />
                </div>
                <div className='px-5 pb-5'>
                <button className='mainBtn text-white rounded-md d-flex align-items-center border-0 mt-4 w-100 justify-content-center'>Kursga yozilish <ArrowSvg /></button>
                </div>
                

            </form>
        </div>
    )
}

export default MainModal