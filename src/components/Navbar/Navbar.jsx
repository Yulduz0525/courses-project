import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../assets/logo.png"
import Language from '../../components/Language/Language'
import MenuBarSvg from '../../icons/MenuBarSvg'
import ArrowSvg from '../../icons/ArrowSvg'
import { useTranslation } from 'react-i18next'
import MainModal from '../MainModal/MainModal'
const Navbar = () => {
    const [showMainModal,setShowMainModal] = useState(false)
    const [showMenu,setShowMenu] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const showModal = () =>{
        setShowMainModal(!showMainModal)
    }
    const { t } = useTranslation();
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
    const toggleMenu = () =>{
        setShowMenu(!showMenu)
    }
    const navLink = [
        {
            linkName: t('nav.link1'),
            path: "aboutCours"
        },
        {
            linkName: t('nav.link2'),
            id: "aboutUs"
        },
        {
            linkName: t('nav.link3'),
            id: "comments"
        },
        {
            linkName: t('nav.link4'),
            id: "contacts"
        },
    ]
    
    return (
        <div>
            <nav className={`${scrolled && 'scrolled'} position-fixed top-0 left-0 w-100  d-flex justify-content-center`}>
                <div className='container'>
                    <div className='d-flex justify-content-between align-items-center text-white w-full py-3' >
                        <div>
                            <Link to={'/'} >
                                <img onClick={() => scrollToSection(item.id)} src={Logo} />
                            </Link>
                        </div>
                        <div className='hidden'>
                            <ul className='d-flex align-items-center gap-5 list-unstyled'>
                                {
                                    navLink?.map((item, index) => (
                                        <li key={index} onClick={() => scrollToSection(item.id)}>
                                            <Link to={item.path} className="text-decoration-none menuLink">{item.linkName}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className='hidden'>
                            <Language />
                        </div>
                        <button className='menubar bg-transparent border-0' onClick={toggleMenu}>
                            <MenuBarSvg/>
                        </button>
                    </div>
                </div>
            </nav>
            <div className={`${showMenu === true ? "showMenu":'closeMenu'}`}>
                <div className='mobileMenu'>
                    <div className='text-white d-flex justify-content-end px-5 pt-3 closeMenuX' onClick={toggleMenu}><p className='close px-2'>X</p></div>
                    <div className='d-flex align-items-center internal_mobileMenu px-5 justify-content-between'>
                        <Link to={'/'}>
                        <img src={Logo} alt='logo'/>
                        </Link>
                        <Language/>
                    </div>
                    <ul className='d-flex flex-column align-items-center gap-3 list-unstyled'>
                                {
                                    navLink?.map((item, index) => (
                                        <li key={index} className="">
                                            <Link to={item.path} className="text-white text-decoration-none menuLink">{item.linkName}</Link>
                                        </li>
                                    ))
                                }
                    </ul>
                    <div className='d-flex justify-content-center'>
                    <button onClick={showModal} className='mainBtn text-white rounded-md d-flex align-items-center border-0'>{t('header.btn1')} <ArrowSvg /></button>
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

export default Navbar