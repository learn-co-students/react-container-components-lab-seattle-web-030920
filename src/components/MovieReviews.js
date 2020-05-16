
// import React from 'react';

// const Review = ({
//   headline,
//   byline,
//   link,
//   summary_short
// }) => {
//   return (

//     <div
//       key={headline}
//       className="review"
//     >
//       <header>
//         <a
//           className="review-link"
//           href={link.url}
//         >
//           {headline}
//         </a>
//         <br/>
//         <span className="author">{byline}</span>
//       </header>
//       <blockquote>{summary_short}</blockquote>
//     </div>
//   );
// };

// const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>;

// MovieReviews.defaultProps = {
//   reviews: []
// };

// export default MovieReviews;


// src/BookList.js
import React from 'react';
import MovieReview from './MovieReview';
 
const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(rev => <MovieReview className="review" review={rev} key={rev.headline}/>)}</div>;
//{(Math.floor(Math.random() * 100000) + 1)} 
export default MovieReviews;



// import React from 'react'
// import MovieReview from './MovieReview'

// const MovieReviews = ({reviews}) => (    
//     <div className="review-list">
//         {reviews.map(currReview => <MovieReview review={currReview} key={(Math.floor(Math.random() * 100000) + 1)}/>)}
//     </div>
// )

MovieReview.defaultProps = {
    reviews: []
}

// export default MovieReviews