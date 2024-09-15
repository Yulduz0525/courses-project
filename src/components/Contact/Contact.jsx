import React from 'react'
import ContactImg1Svg from '../../icons/ContactImg1Svg'
import ContactImg2Svg from '../../icons/ContactImg2Svg'
const Contact = () => {
    return (
        <div className='container'>
            <h1 className='ad_title fw-bold pb-4'>Biz bilan bog’laning</h1>
            <div className='d-flex'>
                <div>
                    <h3>Kontaktlar</h3>
                    <div className='d-flex gap-2 align-items-center'>
                        <ContactImg1Svg />
                        <p className='text-white fw-semibold'>Bunyodkor shoh ko’chasi</p>
                    </div>
                    <div className='d-flex gap-2 align-items-center'>
                        <ContactImg2Svg />
                        <p className='text-white fw-semibold'>+998 (33)-001-20-00</p>
                    </div>
                </div>
                <div>
                <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.563516891745!2d69.20231527591244!3d41.27483867131436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a3d32fd18b5%3A0xab5f80ce6aeaa081!2z0L_RgNC-0YHQv9C10LrRgiDQkdGD0L3RkdC00LrQvtGALCDQotCw0YjQutC10L3RgiwgVGFzaGtlbnQsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1726385346025!5m2!1sru!2s"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
                </div>
            </div>
        </div>
    )
}

export default Contact