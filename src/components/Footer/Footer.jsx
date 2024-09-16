import React, { useEffect } from 'react'
import PhoneSvg from '../../icons/PhoneSvg'
import TgSvg from '../../icons/TgSvg'
import FacebookSvg from '../../icons/FacebookSvg'
import YtSvg from '../../icons/YtSvg'
import InstagrammSvg from '../../icons/InstagrammSvg'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Footer = () => {
    const {t} = useTranslation()
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
                                {t('footer.text1')}
                            </li>
                            <li className='footer-ul-text' onClick={() => scrollToSection("coursesInDirections")}>{t('footer.text2')}</li>
                            <li className='footer-ul-text' onClick={() => scrollToSection("coursesInDirections")}>{t('footer.text3')}</li>
                            <li className='footer-ul-text' onClick={() => scrollToSection("coursesInDirections")}>{t('footer.text4')}</li>
                            <li className='footer-ul-text' onClick={() => scrollToSection("coursesInDirections")}>{t('footer.text5')}</li>
                            <li className='footer-ul-text' onClick={() => scrollToSection("coursesInDirections")}>{t('footer.text6')}</li>
                            <li className='footer-ul-text' onClick={() => scrollToSection("coursesInDirections")}>{t('footer.text7')}</li>
                        </ul>
                    </div>
                    <div>
                        <ul className='list-unstyled'>
                            <li className='fs-5 fw-bold footer-ul-title'>{t('footer.text8')}</li>
                            <li className='footer-ul-text'>
                                <Link to='/aboutCours' className='text-decoration-none footer-ul-text'>
                                {t('footer.text9')}
                                </Link>
                            </li>
                            <li className='footer-ul-text' onClick={() => scrollToSection("comments")}>{t('footer.text10')}</li>
                            <li className='footer-ul-text' onClick={() => scrollToSection("aboutUs")}>{t('footer.text11')}</li>
                            <li className='footer-ul-text' onClick={() => scrollToSection("contacts")}>{t('footer.text12')}</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='fw-bold fs-5 footer-ul-title'>{t('footer.text13')}</h4>
                        <p className='footer-p-title'>{t('footer.text14')}</p>
                        <h4 className='fw-bold fs-5 footer-ul-title'>{t('footer.text15')}</h4>
                        <p className='footer-p-title'>{t('footer.text16')}</p>
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