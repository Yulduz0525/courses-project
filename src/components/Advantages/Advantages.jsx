import React from 'react'
import AdImg1 from '../../assets/ad-img1.png'
import AdImg2 from '../../assets/ad-img2.png'
import AdImg3 from '../../assets/ad-img3.png'
import AdImg4 from '../../assets/ad-img4.png'
import AdImg5 from '../../assets/ad-img5.png'
import AdImg6 from '../../assets/ad-img6.png'
import AdImg7 from '../../assets/ad-img7.png'
import AdImg8 from '../../assets/ad-img8.png'
import AdImg9 from '../../assets/ad-img9.png'
import AdImg10 from '../../assets/ad-img10.png'
import AdImg11 from '../../assets/ad-img11.png'
import AdImg12 from '../../assets/ad-img12.png'
import AdImg13 from '../../assets/ad-img13.png'
import AdImg14 from '../../assets/ad-img14.png'
import AdImg15 from '../../assets/ad-img15.png'
import ArrowSvg from '../../icons/ArrowSvg'
import TimeSvg from '../../icons/TimeSvg'
const Advantages = () => {
    return (
        <div className='container'>
            <div className='py-4'>
                <h3 className='ad_title fw-bold'>Afzalliklarimiz</h3>
                <p className='ad_text'>Biz hozirda o'zizmizning oldimizga qo'ygan maqsadlarimiz <br /> sari yo'l olmoqdamiz qani sizham bizga qo'shiling!</p>
                <div className='d-flex flex-wrap gap-5 py-5 justify-content-center'>
                    <div className='ad-card p-4 col-br'>
                        <img src={AdImg1} />
                        <div>
                            <h4 className='ad_card_title'>
                                O’z ishining ustalari
                            </h4>
                            <p className='ad_card_text'>Ustozlar o'z kasblari bo'yicha ko'p yillik tajribaga ega bo'lib, ularga qimmatli saboqlar va ilg'or tajribalarni o'z o’quvchilari bilan baham ko'rish imkonini beradi.</p>
                        </div>
                    </div>
                    <div className='ad-card p-4 col-br'>
                        <img src={AdImg2} />
                        <div>
                            <h4 className='ad_card_title'>
                            Shunchaki kurs emas
                            </h4>
                            <p className='ad_card_text'>Har bir o‘quv kursi shunday ishlab chiqilganki, ularni muvaffaqiyatli yakunlab, siz zamonaviy kasb egasiga aylanishingiz va shu sohada o‘z faoliyatingizni boshlashingiz mumkin.</p>
                        </div>
                    </div>
                    <div className='ad-card p-4 col-br'>
                        <img src={AdImg3} />
                        <div>
                            <h4 className='ad_card_title'>
                            Interaktiv darslar
                            </h4>
                            <p className='ad_card_text'>Biznig interaktiv darslar, bu erda siz o'quvchilarni jalb qilish va bilimlarni saqlash uchun interaktivlikdan foydalanadigan innovatsion o'qitish usullari dunyosiga kirib borasiz.</p>
                        </div>
                    </div>
                    <div className='ad-card p-4 col-br'>
                        <img src={AdImg4} />
                        <div>
                            <h4 className='ad_card_title'>
                            Nazariya va amaliyot
                            </h4>
                            <p className='ad_card_text'>Amaliyot odamlarga nazariyalarni amaliy sharoitlarda sinab ko'rish, o'z mahoratini oshirish va amaliy tajriba orqali tajribani rivojlantirish, nazariya va real dastur o'rtasidagi farqni bartaraf etadi.</p>
                        </div>
                    </div>
                    <div className='ad-card p-4 col-br'>
                        <img src={AdImg5} />
                        <div>
                            <h4 className='ad_card_title'>
                            Mentor kerakmi?
                            </h4>
                            <p className='ad_card_text'>Darslarni o‘zlashtirish davrida sizda savollar tug‘ilishi tabiiy holat. Mentorlarga murojaat qilsangiz, ular sizni qiynayotgan masalalar bo‘yicha yechim topishga yo‘l ko‘rsatadilar.</p>
                        </div>
                    </div>
                    <div className='ad-card p-4 col-br'>
                        <img src={AdImg6} />
                        <div>
                            <h4 className='ad_card_title'>
                            Sertifikat
                            </h4>
                            <p className='ad_card_text'>Sertifikatlashni davom ettirish doimiy kasbiy rivojlanishni va ushbu uzluksiz ta'lim sertifikatlangan mutaxassislarga o'z sohalarida raqobatbardosh va dolzarb bo'lib qolishlariga yordam beradi.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pt-3 pb-5 '>
                <div className='select-course d-flex align-items-center gap-5'>
                    <div>
                    <h2 className='select-course-title fw-bold'>O’zingizga mos yo’nalishni tanlang!</h2>
                    <p className='select-course-text pt-2 pb-5'>Dasturlash dunyosida kashfiyot safariga chiqishga tayyormisiz? Ushbu kurs sizga dasturlash mutaxassisliklarining turli landshaftlarini kezish va qiziqishlaringiz va martaba maqsadlaringizga mos keladigan yo'nalishni topishga yordam berish uchun mo'ljallangan. Interfaol mashqlar, murabbiylik mashg'ulotlari va amaliy loyihalar orqali siz turli xil dasturlash sohalarini o'rganasiz va sizning mahoratingiz va ehtiroslaringizga eng mos keladigan yo'lni ochasiz. Ushbu qiziqarli kashfiyotda bizga qo'shiling va dasturlashda qoniqarli martaba sari birinchi qadamni qo'ying.</p>
                    <div className='course-s-btnWrapper d-flex'>
                        <button className='mainBtn text-white rounded-md d-flex align-items-center border-0'>Kursga yozilish <ArrowSvg /></button>
                    </div>
                    
                </div>
                <div className='d-flex flex-column justify-content-center gap-3'>
                    <div className='d-flex align-items-center gap-3'>
                        <img className='select-course-img1' src={AdImg7}/>
                        <img className='select-course-img2' src={AdImg8}/>
                    </div>
                    <img className='select-course-img3' src={AdImg9}/>
                </div>
                </div>
                
            </div>
            <div className='py-5'>
            <h2 className='select-course-title fw-bold text-center'>Yo’nalishlar bo’yicha kurslar</h2>
            <p className='select-course-text pt-2 pb-5 text-center'>Zamonaviy sohalardan birini o‘rganing va talabgir kasb egasi bo‘ling!</p>
            <div className='d-flex flex-wrap ad-bottom justify-content-center'>
                <div className='ad-bottom-card p-3'>
                    <div className='d-flex gap-2 align-items-center'>
                        <img src={AdImg10}/>
                        <h3 className='ad_card_title'>Frontend</h3>
                    </div>
                    <p className='ad_card_text'>Frontend kursida siz foydalanuvchilar to'g'ridan-to'g'ri ko'rgan va o'zaro aloqada bo'lgan narsalarga e'tibor qaratib, veb-ishlab chiqishning nozik tomonlariga sho'ng'iysiz. Bunga qiziqarli va sezgir foydalanuvchi interfeyslarini yaratish.</p>
                </div>
                <div className='ad-bottom-card p-3'>
                    <div className='d-flex gap-2 align-items-center'>
                        <img src={AdImg11}/>
                        <h3 className='ad_card_title'>UX / UI dizayn</h3>
                    </div>
                    <p className='ad_card_text'>Printsiplar, jarayonlar va amaliy ko'nikmalarni chuqur tushunish. Mobil ilovalar, veb-saytlarni jalb qilish yoki interfeyslarni yaratishga qiziqasizmi, UX / UI dizayn sohasida muvaffaqiyat qozonish uchun zarur bo'lgan bilim va vositalar bilan ta'minlaydi.</p>
                </div>
                <div className='ad-bottom-card3 p-3'>
                    <div className='d-flex gap-2 align-items-center'>
                        <img src={AdImg12}/>
                        <h3 className='ad_card_title'>3d max</h3>
                    </div>
                    <p className='ad_card_text'>3D modellashtirish, animatsiya va vizualizatsiyaning jozibali sohasiga kirish eshigingiz. Kurs davomida siz 3D Max-ning kuchli xususiyatlariga sho'ng'ib, ajoyib vizualizatsiya va hayotiy animatsiyalarni yaratishni o'rganish.</p>
                </div>
                <div className='ad-bottom-card2 ad-bottom-card5 p-3'>
                    <div className='d-flex gap-2 align-items-center'>
                        <img src={AdImg13}/>
                        <h3 className='ad_card_title'>Backend</h3>
                    </div>
                    <p className='ad_card_text'>Backend rivojlantirish dasturiy taminotga  xush kelibsiz! Ushbu modulda siz server tomonidagi dasturlash dunyosiga kirib borasiz va veb-ilovalar va tizimlarning asosini yaratishni o'rganasiz.</p>
                </div>
                <div className='ad-bottom-card2 ad-bottom-card6 p-3'>
                    <div className='d-flex gap-2 align-items-center'>
                        <img src={AdImg14}/>
                        <h3 className='ad_card_title'>Kompyuter savodxonligi</h3>
                    </div>
                    <p className='ad_card_text'>Kompyuter fanining qiziqarli dunyosiga xush kelibsiz! Ushbu kursda siz zamonaviy texnologiyalarning asosini tashkil etuvchi hisoblash asoslari, algoritmlar va muammolarni hal qilish usullarini o'rganasiz.</p>
                </div>
                <div className='ad-bottom-card4 p-3'>
                    <div className='d-flex gap-2 align-items-center'>
                        <img src={AdImg15}/>
                        <h3 className='ad_card_title'>Scratch</h3>
                    </div>
                    <p className='ad_card_text'>Ushbu kurs yangi boshlanuvchilar uchun mo'ljallangan dasturlash tili Scratch yordamida vizual dasturlash asoslari va g’oyalaringizni hayotga tatbiq etish uchun spritlar, kostyumlar va tadbirlar kabi tushunchalarni o'rganing.</p>
                </div>
            </div>
            <div className='d-flex gap-3 align-items-center btnWrapper py-3 px-4'>
                    <button className='mainBtn text-white rounded-md d-flex align-items-center border-0'>Batafsil <ArrowSvg /></button>
                    <button className='d-flex align-items-center bg-transparent border-0 videoBtn gap-2'>
                        {/* <BtnVideoSvg/> */}
                        <TimeSvg/>
                        <p className='text-white '>Kutilayotgan kurslar</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Advantages