import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    state = {
        reviews: [],
        searchTerm: ``
    }

    handleInputField = e => {
        this.setState({searchTerm: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch(URL+`&query=${this.searchTerm}`)
        .then(res=>res.json())
        .then(search => this.setState({reviews: search.results}))
        
    }

    render () {
        return (
            <div className='searchable-movie-container'>
                <form onSubmit={this.handleSubmit}>
                    <label>Search for a goddamn movie</label>
                    <input type='text' onChange={this.handleInputField}>

                    </input>
                    <button type='submit'>You failure</button>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer
