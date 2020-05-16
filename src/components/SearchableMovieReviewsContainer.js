import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component{
    constructor(){
        super()
        this.state={
            reviews:[],
            searchTerm:""
        }
    }
    componentDidMount(){
        fetch(`${URL}&query=${this.state.searchTerm}`)
        .then(res=>res.json())
        .then(data=>this.setState({
            reviews:data.results
        }))
    }
    handleOnSubmit=event=>{
        event.preventDefault()
        this.setState({
            searchTerm: event.target.value
        })
      
    }
    render(){
        return(
            <div>
            <form onSubmit={this.handleOnSubmit}>
            <label>Movie you want to look up</label>
            <input type="text"/>
            </form>
            <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}