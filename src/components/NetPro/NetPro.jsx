import React from 'react'
import NumberImg1 from "../../assets/number1Img.png"
import NumberImg2 from "../../assets/number2Img.png"
import NumberImg3 from "../../assets/number3Img.png"
import NumberImg4 from "../../assets/number4Img.png"
import NumberImg5 from "../../assets/number5Img.png"
import NumberImg6 from "../../assets/number6Img.png"
import NumberImg7 from "../../assets/number7Img.png"
import NumberImg8 from "../../assets/number8Img.png"
import NumberImg9 from "../../assets/number9Img.png"
const NetPro = () => {
    return (
        <div className='container'>
            <h3 className='ad_title fw-bold py-3'>Nima uchun NetPro?</h3>
            <div className='d-flex align-items-center pt-3 pb-5 flex-wrap gap-4 justify-content-center'>
                <div className='netProCard'>
                    <div className='netProTop p-3 d-flex align-items-center gap-2'>
                        <img src={NumberImg1} />
                        <h4 className='ad_card_title'>Sifatli ta’lim</h4>
                    </div>
                    <p className='ad_card_text p-3'>Doimiy yangilanib boradigan kurslar va katta tajribaga ega ustozlar.</p>
                </div>
                <div className='netProCard'>
                    <div className='netProTop p-3 d-flex align-items-center gap-2'>
                        <img src={NumberImg2} />
                        <h4 className='ad_card_title'>Doimiy musobaqalar</h4>
                    </div>
                    <p className='ad_card_text p-3'>Dasturlash, bo‘yicha haftalik va oylik hakaton musobaqalar.</p>
                </div>
                <div className='netProCard'>
                    <div className='netProTop p-3 d-flex align-items-center gap-2'>
                        <img src={NumberImg3} />
                        <h4 className='ad_card_title'>Ish taklif qilish kafolati</h4>
                    </div>
                    <p className='ad_card_text p-3'>Kurslarni namunali bitirgan o‘quvchilarga ish taklif qilish kafolati.</p>
                </div>
                <div className='netProCard'>
                    <div className='netProTop p-3 d-flex align-items-center gap-2'>
                        <img src={NumberImg4} />
                        <h4 className='ad_card_title'>Sertifikat</h4>
                    </div>
                    <p className='ad_card_text p-3'>Kursni namunali tamomlagan o‘quvchilar, diplom va sertifikatga ega bo‘ladi.</p>
                </div>
                <div className='netProCard'>
                    <div className='netProTop p-3 d-flex align-items-center gap-2'>
                        <img src={NumberImg5} />
                        <h4 className='ad_card_title'>Hamyonbop va yuqori sifat</h4>
                    </div>
                    <p className='ad_card_text p-3'>Byudjetga mos narxda yuqori sifatli <br /> ko'rsatmalar.</p>
                </div>
                <div className='netProCard'>
                    <div className='netProTop p-3 d-flex align-items-center gap-2'>
                        <img src={NumberImg6} />
                        <h4 className='ad_card_title'>Bepul ochiq darsga yozilish</h4>
                    </div>
                    <p className='ad_card_text p-3'>Bepul ochiq dars, cheksiz imkoniyatlarni kashf qilish uchun mo'ljallangan.</p>
                </div>
                <div className='netProCard'>
                    <div className='netProTop p-3 d-flex align-items-center gap-2'>
                        <img src={NumberImg7} />
                        <h4 className='ad_card_title'>2 oy ichida 0 dan daromadgacha</h4>
                    </div>
                    <p className='ad_card_text p-3'>2 oy ichida 0 dan daromadgacha bo'lgan g'alabangizga yo'l ochadigan sayohat.</p>
                </div>
                <div className='netProCard'>
                    <div className='netProTop p-3 d-flex align-items-center gap-2'>
                        <img src={NumberImg8} />
                        <h4 className='ad_card_title'>3+ yil tajribaga ega mentorlar</h4>
                    </div>
                    <p className='ad_card_text p-3'>3 yil tajribaga ega mentorlar, intiluvchan shaxslar uchun yo'lni yoritadi.</p>
                </div>
                <div className='netProCard'>
                    <div className='netProTop p-3 d-flex align-items-center gap-2'>
                        <img src={NumberImg9} />
                        <h4 className='ad_card_title'>Portfolio va resumeni shakllantirish</h4>
                    </div>
                    <p className='ad_card_text p-3'>Resume va portfelingizni eng yaxshi ishingiz galereyasini shakllantirish.</p>
                </div>
            </div>
        </div>
    )
}

export default NetPro