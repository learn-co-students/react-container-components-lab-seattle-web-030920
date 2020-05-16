import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'CjevrbSGgftiGgfeB5ozJPO9GW30vYkM';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component
{
    state = {
        reviews: []
    }

    componentDidMount()
    {
        fetch(URL)
        .then(res => res.json())
        .then(json => this.setState({
            reviews: json.results
        }))
    }

    render()
    {
        return (
            <div className="latest-movie-reviews">
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}

