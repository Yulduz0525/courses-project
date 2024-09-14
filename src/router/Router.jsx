import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RootLayout from '../layout/RootLayout'
import MainPage from '../page/MainPage'
import AboutCourse from '../page/AboutCourse'

const Router = () => {
  return (
    <div className='Router'>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<RootLayout/>}>
                    <Route index element={<MainPage/>}/>
                    <Route path='aboutCours' element={<AboutCourse/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router