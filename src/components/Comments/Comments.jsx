import React from 'react'
import CommentCarousel from '../CommentCarousel/CommentCarousel'
const Comments = () => {
    return (
        <div id='comments' className='container py-5'>
            <h3 className='ad_title fw-bold pb-4'>O’quvchilarning fikrlari</h3>
            <CommentCarousel/>
        </div>
    )
}

export default Comments