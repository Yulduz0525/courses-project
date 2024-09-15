import React from 'react'
import Sertificate1 from "../../assets/sertificate1.png"
import Sertificate2 from "../../assets/sertificate2.jpg"
const Sertificate = () => {
  return (
    <div className='container pt-4'>
        <h2 className='ad_title fw-bold'>Ixtisoslashtirilgan o’quv sertifikati</h2>
        <div className='sertificates d-flex justify-content-center gap-5 pt-4 pb-5'>
            <img src={Sertificate1}/>
            <img src={Sertificate2}/>
        </div>
    </div>
  )
}

export default Sertificate