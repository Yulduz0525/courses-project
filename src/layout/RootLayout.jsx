import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Logo from "../assets/logo.png"
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
                <nav className='flex items-center text-white'>
                    <div>
                        <img src={Logo} />
                    </div>
                    <ul className='flex items-center'>
                        {
                            navLink?.map((item) => (
                                <li>
                                    <Link to={item.path}>{item.linkName}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
                <Outlet />
                <footer>footer</footer>
            </div>
        </>
    )
}

export default RootLayout