import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../assets/logo.png"
import Language from '../../components/Language/Language'
const Navbar = () => {
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
        <div>
            <nav>
                <div className='container'>
                    <div className='d-flex justify-content-between align-items-center text-white w-full py-3' >
                        <div>
                            <Link to={'/'}>
                                <img src={Logo} />
                            </Link>
                        </div>
                        <div>
                            <ul className='d-flex align-items-center gap-3 list-unstyled'>
                                {
                                    navLink?.map((item, index) => (
                                        <li key={index} className="">
                                            <Link to={item.path} className="text-white text-decoration-none menuLink">{item.linkName}</Link>
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
        </div>
    )
}

export default Navbar