import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export class SearchableMovieReviewsContainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             reviews:[],
             searchTerm: ""
        }
    }
    handleChange=(event)=>{
        this.setState({searchTerm: event.target.value})
    }
    handleSubmit=(event)=>{
        event.preventDefault()
        fetch(URL+`&query=${this.state.searchTerm}`).then(resp=>resp.json()).then(resp=> this.setState({reviews: resp.results}))
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <input name="search" onChange={this.handleChange}></input>
                <button type="submit">Search</button>
                </form>
                 <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer

