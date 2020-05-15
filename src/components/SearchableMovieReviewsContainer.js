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
        searchTerm: ""
    }

    componentDidMount() {
        this.fetchReviews()
    }

    fetchReviews = (search = "fun") => {
        fetch(`${URL}&query=${search}`)
        .then(resp => resp.json())
        .then(result => this.setState({reviews: result.results}))
    }

    handleChange = event => {
        this.setState({searchTerm: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault()
        this.fetchReviews(this.state.searchTerm)
        this.setState({searchTerm: ""})
    }

    render() {
        return(
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <h3>Enter a Search Term:</h3>
                    <input onChange={this.handleChange} value={this.state.searchTerm} />
                </form><br />
                <MovieReviews movies={this.state.reviews} />
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer
