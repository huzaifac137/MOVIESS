import React from 'react';
import { useNavigate } from 'react-router';

function MovieItem({title , desc , id}) {

    const navigate= useNavigate();

    const fullDetails=()=>
    {
        navigate("/details" , {state : {title : title , releaseYear : desc , id : id} });
    }
    return (
        <div className="card" onClick={fullDetails}>

             <h2>{title}</h2>
            
        </div>
    );
}

export default MovieItem;