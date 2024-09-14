import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Logo from "../assets/logo.png"
import Language from '../components/Language/Language'
const RootLayout = () => {
    const navLink = [
        {
            linkName: "Kurs haqida",
            path: "aboutCours"
        },
        {
            linkName: "Biz haqimizda",
            path: ""
        },
        {
            linkName: "O’quvchilar fikri",
            path: ""
        },
        {
            linkName: "Kontakt",
            path: ""
        }
    ]
    return (
        <>
            <div className='container'>
                <nav>
                    <div className='container'>
                        <div className='flex justify-between items-center text-white w-full' >
                            <div>
                                <Link to={'/'}>
                                    <img src={Logo} />
                                </Link>
                            </div>
                            <div>
                                <ul className='flex items-center gap-[60px]' style={{gap:"60px"}}>
                                    {
                                        navLink?.map((item, index) => (
                                            <li key={index} className='hover:text-indigo-500 menuLink'>
                                                <Link to={item.path}>{item.linkName}</Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div>
                                <Language />
                            </div>
                        </div>
                    </div>
                </nav>
                <Outlet />
                <footer>footer</footer>
            </div>
        </>
    )
}

export default RootLayout