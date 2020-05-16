import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import MovieReview from './MovieReview';

const NYT_API_KEY = 'CjevrbSGgftiGgfeB5ozJPO9GW30vYkM';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component
{

    state = {
        searchTerm: '',
        reviews: []        
    }

    handleSearchData(searchResults)
    {
        this.setState({
            reviews: searchResults
        }, function () {
            {<MovieReviews reviews={this.state.reviews} />}
        })        
    }

    handleSubmit = event =>
    {
        event.preventDefault()
        let searchURL = `${URL}&query=${this.state.searchTerm}`
        fetch(searchURL)
        .then(res => res.json())
        .then(json => this.setState({
            reviews: json.results 
        }))
    }

    handleSearchInputChange = event => {
        this.setState({
            searchTerm: event.target.value
        }, function () {
            console.log(this.state.query);
        })
    }

    render()
    {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="search-input"> Search Movie Reviews</label>
                    <input id="search-input" type="text" onChange={this.handleSearchInputChange} value={this.state.searchTerm} className="searchTerm" />
                </form>

                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}