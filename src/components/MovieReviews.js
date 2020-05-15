// Code MovieReviews Here
import React from 'react'

const renderReview = (movie) => {
    return(
        <div key={movie.display_title} className="review">
            <header>
                <a className="review-link" href={movie.link.url}>
                    {movie.headline}
                </a>
                <br/>
                <span className="author">{movie.byline}</span>
            </header>
            <blockquote>{movie.summary_short}</blockquote>
        </div>
    )
}

const MovieReviews = props => {
    return(
        <div className="review-list">
            {props.movies.map(renderReview)}
        </div>
    )
}

MovieReviews.defaultProps = {
    reviews: []
}

export default MovieReviews
