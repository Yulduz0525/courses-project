import React from 'react'
import CommentCarousel from '../CommentCarousel/CommentCarousel'
import { useTranslation } from 'react-i18next'
const Comments = () => {
    const {t} = useTranslation()
    return (
        <div id='comments' className='container py-5'>
            <h3 className='ad_title fw-bold pb-4'>{t('comments.title')}</h3>
            <CommentCarousel/>
        </div>
    )
}

export default Comments