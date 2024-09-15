import React, { useEffect } from 'react'
import PhoneSvg from '../../icons/PhoneSvg'
import TgSvg from '../../icons/TgSvg'
import FacebookSvg from '../../icons/FacebookSvg'
import YtSvg from '../../icons/YtSvg'
import InstagrammSvg from '../../icons/InstagrammSvg'
import { Link } from 'react-router-dom'

const Footer = () => {
    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
      };
      useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 0) setScrolled(true)
            else setScrolled(false)
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return (
        <div className='footer py-5'>
            <div className='container'>
                <div className='d-flex align-items-start justify-content-between text-white footer_wrapper'>
                    <div>
                        <ul className='list-unstyled'>
                            <li className='fw-bold fs-5 footer-ul-title'>
                                Kurslarimiz
                            </li>
                            <li className='footer-ul-text' onClick={() => scrollToSection("coursesInDirections")}>3d max</li>
                            <li className='footer-ul-text' onClick={() => scrollToSection("coursesInDirections")}>UX UI dizayn</li>
                            <li className='footer-ul-text' onClick={() => scrollToSection("coursesInDirections")}>Front-end</li>
                            <li className='footer-ul-text' onClick={() => scrollToSection("coursesInDirections")}>Back-end</li>
                            <li className='footer-ul-text' onClick={() => scrollToSection("coursesInDirections")}>Kompyuter savodxonligi</li>
                            <li className='footer-ul-text' onClick={() => scrollToSection("coursesInDirections")}>Scratch o’yin dasturlash</li>
                        </ul>
                    </div>
                    <div>
                        <ul className='list-unstyled'>
                            <li className='fs-5 fw-bold footer-ul-title'>Bo’limlar</li>
                            <li className='footer-ul-text'>
                                <Link to='/aboutCours' className='text-decoration-none footer-ul-text'>
                                Kurs haqida
                                </Link>
                            </li>
                            <li className='footer-ul-text' onClick={() => scrollToSection("comments")}>O’quvchilar fikri</li>
                            <li className='footer-ul-text' onClick={() => scrollToSection("aboutUs")}>Biz haqimizda</li>
                            <li className='footer-ul-text' onClick={() => scrollToSection("contacts")}>Kontakt</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='fw-bold fs-5 footer-ul-title'>Biz haqimizda qisqacha</h4>
                        <p className='footer-p-title'>NetPro-dasturlashga ilk qadam shu <br /> yerdan boshlanadi! <br /> </p>
                        <h4 className='fw-bold fs-5 footer-ul-title'>Manzil:</h4>
                        <p className='footer-p-title'>Toshkent, Chilonzor, Bunyodkor Shoh ko’chasi</p>
                        <div className='d-flex gap-2 py-2'>
                            <PhoneSvg />
                            <p className='footer-phone font-semibold'>+998 (33)-001-20-00</p>
                        </div>
                        <div className='d-flex gap-3 py-1'>
                            <button className='bg-transparent border-0'>
                            <TgSvg />
                            </button>
                            <button className='bg-transparent border-0'>
                            <FacebookSvg />
                            </button>
                            <button className='bg-transparent border-0'>
                            <YtSvg />
                            </button>
                            <button className='bg-transparent border-0'>
                            <InstagrammSvg />
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer