// src/Book.js
import React from 'react';

const MovieReview = ({review: {headline, byline, link, summary_short}}) => {
    return (
        <div key={headline}>            
            <header>
        <a className="review-link" href={link.url}> {headline} </a>
        <br/>
        <span className="author">{byline}</span>
      </header>
      <blockquote>{summary_short}</blockquote>
        </div>
    )
}

// const MovieReview = props => {
//     return (
//         <div className="review">
//             <h2>{props.review.headline}</h2>
//         </div>
//     )
// }
 
export default MovieReview;

// import React from 'react'


// const MovieReview = props => ( 
//     <div className="review">  
//        <header>{props.display_title}</header>       
//     </div> 
// )

// export default MovieReview


