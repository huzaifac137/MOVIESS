import React, { useState } from 'react';

function AddMovie(props) {
    const[NAME , setNAME] = useState("");
    const[DESC ,setDESC]= useState("");

    const nameHandler=(e)=>
    {
        setNAME(e.target.value);
    }

    const descHandler=(e)=>
    {
        setDESC(e.target.value);
    }

    const handleSubmit=async(e)=>
    {
        e.preventDefault();

        console.log(NAME + " "+ DESC);

        try
        {

        
        await fetch("http://localhost:5000/api/add" , {

            method :"POST" ,

            headers : {
                "Content-Type" : "application/json" ,
            } ,

            body : JSON.stringify({
                NAME : NAME ,
                DESC : DESC
            })

        })
    
    }

        catch(err)
        {
            console.log(err);
        }


    }

    return (
        <form  onSubmit={handleSubmit} className="cardDetails">

            <h1> ADD MOVIE </h1>

            <h2> NAME </h2>
            <input type="text" value={NAME} onChange={nameHandler} />

            <h2> RELEASE YEAR </h2>
            <input type="text" value={DESC} onChange={descHandler} />

            <button className="btn" style={{marginTop:"30px"}}> SUBMIT </button>
        </form>
    );
}

export default AddMovie;