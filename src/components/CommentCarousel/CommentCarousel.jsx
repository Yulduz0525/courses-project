import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Avatar from "../../assets/avatar.png"
import Quotes from "../../assets/quotes.png"
import StarSvg from '../../icons/StarSvg';
import { t } from 'i18next';
const CommentCarousel = () => {
  const settings = {
    dots: true, // Slide indicatorlar ko'rsatish
    infinite: true, // Cheksiz aylanishni yoqish
    speed: 500,
    slidesToShow: 3, // Bir vaqtning o'zida 3ta slaydni ko'rsatish
    slidesToScroll: 1, // Bitta slaydni scroll qilish
    customPaging: (i) => (
      <button className="custom-dot">{i + 1}</button>
    ),
    responsive: [
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 790,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div className='carousel-slide'>
          <div className='p-4 slick-carousel-item'>
            <div className='d-flex align-items-start gap-3'>
              <img src={Avatar} alt='Avatar' />
              <div className=''>
                <p className='ad_card_title p-0'>{t('commentsCard.name')}</p>
                <p className='ad_card_text'>{t('commentsCard.job')}</p>
              </div>
              <img src={Quotes} alt='quotes' />
            </div>
            <p className='ad_card_text py-3'>{t('commentsCard.text')}</p>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='d-flex align-items-center gap-1'>
                <StarSvg />
                <p className='text-white'>(4.8)</p>
              </div>
              <p className='text-white'>04 Oct 2024</p>
            </div>
          </div>
        </div>
        <div className='carousel-slide'>
          <div className='p-4 slick-carousel-item'>
            <div className='d-flex align-items-start gap-3'>
              <img src={Avatar} alt='Avatar' />
              <div className=''>
                <p className='ad_card_title p-0'>{t('commentsCard.name')}</p>
                <p className='ad_card_text'>{t('commentsCard.job')}</p>
              </div>
              <img src={Quotes} alt='quotes' />
            </div>
            <p className='ad_card_text py-3'>{t('commentsCard.text')}</p>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='d-flex align-items-center gap-1'>
                <StarSvg />
                <p className='text-white'>(4.8)</p>
              </div>
              <p className='text-white'>04 Oct 2024</p>
            </div>
          </div>
        </div>
        <div className='carousel-slide'>
          <div className='p-4 slick-carousel-item'>
            <div className='d-flex align-items-start gap-3'>
              <img src={Avatar} alt='Avatar' />
              <div className=''>
                <p className='ad_card_title p-0'>{t('commentsCard.name')}</p>
                <p className='ad_card_text'>{t('commentsCard.job')}</p>
              </div>
              <img src={Quotes} alt='quotes' />
            </div>
            <p className='ad_card_text py-3'>{t('commentsCard.text')}</p>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='d-flex align-items-center gap-1'>
                <StarSvg />
                <p className='text-white'>(4.8)</p>
              </div>
              <p className='text-white'>04 Oct 2024</p>
            </div>
          </div>
        </div>
        <div className='carousel-slide'>
          <div className='p-4 slick-carousel-item'>
            <div className='d-flex align-items-start gap-3'>
              <img src={Avatar} alt='Avatar' />
              <div className=''>
                <p className='ad_card_title p-0'>{t('commentsCard.name')}</p>
                <p className='ad_card_text'>{t('commentsCard.job')}</p>
              </div>
              <img src={Quotes} alt='quotes' />
            </div>
            <p className='ad_card_text py-3'>{t('commentsCard.text')}</p>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='d-flex align-items-center gap-1'>
                <StarSvg />
                <p className='text-white'>(4.8)</p>
              </div>
              <p className='text-white'>04 Oct 2024</p>
            </div>
          </div>
        </div>
        <div className='carousel-slide'>
          <div className='p-4 slick-carousel-item'>
            <div className='d-flex align-items-start gap-3'>
              <img src={Avatar} alt='Avatar' />
              <div className=''>
                <p className='ad_card_title p-0'>{t('commentsCard.name')}</p>
                <p className='ad_card_text'>{t('commentsCard.job')}</p>
              </div>
              <img src={Quotes} alt='quotes' />
            </div>
            <p className='ad_card_text py-3'>{t('commentsCard.text')}</p>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='d-flex align-items-center gap-1'>
                <StarSvg />
                <p className='text-white'>(4.8)</p>
              </div>
              <p className='text-white'>04 Oct 2024</p>
            </div>
          </div>
        </div>
        

      </Slider>
    </div>
  );
};

export default CommentCarousel;
