// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({ reviews }) => 
    <div className="review-list">{reviews.map(review =>
        <div key={review.headline} className='review'>
            <h4>FUCK REACT</h4>
            <p>{review.headline}</p>
            <p>{review.byline}</p>
        </div>)}
    </div>;

MovieReviews.defaultProps = {
    reviews: []
}

export default MovieReviews