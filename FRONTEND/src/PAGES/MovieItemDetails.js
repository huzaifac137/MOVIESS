import React from 'react';
import { useLocation } from 'react-router';

function MovieItemDetails() {

    const state = useLocation().state;
    
    let title , releaseYear , id;
    if(state!=undefined)
    {
      title = state.title;
      releaseYear = state.releaseYear;
      id = state.id;
    } 


    return (
        <div className="cardDetails">
              <h1>{title}</h1>
              <h2>{releaseYear}</h2>
              <button className="btn" style={{fontSize:"10px"}}>ADD TO WATCHLIST </button>
        </div>
    );
}

export default MovieItemDetails;