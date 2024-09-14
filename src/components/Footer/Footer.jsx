import React from 'react'
import PhoneSvg from '../../icons/PhoneSvg'
import TgSvg from '../../icons/TgSvg'
import FacebookSvg from '../../icons/FacebookSvg'
import YtSvg from '../../icons/YtSvg'
import InstagrammSvg from '../../icons/InstagrammSvg'

const Footer = () => {
    return (
        <div className='footer py-5'>
            <div className='container'>
                <div className='d-flex align-items-start justify-content-between text-white footer_wrapper'>
                    <div>
                        <ul className='list-unstyled'>
                            <li className='fw-bold fs-5 footer-ul-title'>Kurslarimiz</li>
                            <li className='footer-ul-text'>3d max</li>
                            <li className='footer-ul-text'>UX UI dizayn</li>
                            <li className='footer-ul-text'>Front-end</li>
                            <li className='footer-ul-text'>Back-end</li>
                            <li className='footer-ul-text'>Kompyuter savodxonligi</li>
                            <li className='footer-ul-text'>Scratch o’yin dasturlash</li>
                        </ul>
                    </div>
                    <div>
                        <ul className='list-unstyled'>
                            <li className='fs-5 fw-bold footer-ul-title'>Bo’limlar</li>
                            <li className='footer-ul-text'>Kurs haqida</li>
                            <li className='footer-ul-text'>O’quvchilar fikri</li>
                            <li className='footer-ul-text'>Biz haqimizda</li>
                            <li className='footer-ul-text'>Kontakt</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='fw-bold fs-5 footer-ul-title'>Biz haqimizda qisqacha</h4>
                        <p className='footer-p-title'>NetPro-dasturlashga ilk qadam shu <br /> yerdan boshlanadi!</p>
                        <h4 className='fw-bold fs-5 footer-ul-title'>Manzil:</h4>
                        <p className='footer-p-title'>Toshkent, Chilonzor, Bunyodkor Shoh ko’chasi</p>
                        <div className='d-flex gap-2 py-2'>
                            <PhoneSvg />
                            <p className='footer-phone font-semibold'>+998 (33)-001-20-00</p>
                        </div>
                        <div className='d-flex gap-4 py-1'>
                            <TgSvg />
                            <FacebookSvg />
                            <YtSvg />
                            <InstagrammSvg />
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer