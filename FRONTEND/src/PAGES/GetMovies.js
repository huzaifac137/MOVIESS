import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import MovieItem from './MovieItem';

function GetMovies(props) {

    const[MOVIES , setMOVIES] = useState([]);
    const[pageNumber , setPageNumber] = useState(0);
    const[totalPages , setTotalPages] = useState();
    const[SEARCH , setSearch] = useState("");
    const[confirmSearch , setConfirmSearch] = useState("");
    const[sortBy , setSortBy] = useState("");
     const[filterByYear , setFilterByYear]=useState("select");
    const[isLoading , setIsLoading] = useState(false);

    const navigate = useNavigate();

    const years = [
        "select" ,
        1980 ,
        1981 ,
        1982,
        1983,
        1984 ,
        1985 ,
        1986 ,
        1987 ,
        1988 ,
        1989 ,
        1990 ,
        1991 ,
        1992 ,
        1993 ,
        1994 ,
        1995 ,
        1996 ,
        1997 ,
        1998 ,
        1999 ,
        2000 ,
        2001 ,
        2002 ,
        2003 ,
        2004 ,
        2005 ,
        2006 ,
        2007 , 
        2008 , 
        2009 , 
        2010 , 
        2011 , 
        2012 , 
        2013 , 
        2014 , 
        2015 , 
        2016 , 
        2017 , 
        2018 , 
        2019 , 
        2020 , 
        2021 , 
        2022 
    ];

    const pages = new Array(totalPages).fill(null).map((v,i)=>i);

    const searchHandler=(e)=>
    {
        setSearch(e.target.value);
    }

    const sortHandler=(e)=>
    {
        setSortBy(e.target.value);
        console.log(e.target.value);
    }

    const filterHandler=(e)=>
    {
        setFilterByYear(e.target.value);
        console.log(e.target.value);
    }

    const addMovieNavigate=()=>
    {
           navigate("/add");
    }

    const getMovies=async()=>
    {
        
        try
        {
            setIsLoading(true);
            const response = await fetch
            (`http://localhost:5000/api/?page=${pageNumber}&search=${confirmSearch}&sortBy=${sortBy}&filter=${filterByYear}`);
 
            if(response.status!==200)
            {
                throw new Error("CANT ESTALISH CONNECTION")
            }

            const responseData = await response.json();
 
            setMOVIES(responseData.movies);
            setTotalPages(responseData.totalPages);
            setIsLoading(false);
        }

        catch(err)
        {
            console.log(err.message);
            setIsLoading(false);
        }
    }

    useEffect(()=>
    {
       getMovies();

    } , [pageNumber ,confirmSearch , sortBy , filterByYear]);


    return (
        <div className="main" >
            { isLoading===false ?
            <>

            <div className="header">

                {/* ADD MOVIE */}
                <button className="btn add"  style={{fontSize:"10px" , backgroundColor:"green"}} 
                onClick={addMovieNavigate} > ADD NEW MOVIE </button>

            {/* SORT BY */}
            <div style={{display:"flex" , alignItems:"center" , justifyContent:"space-between" , width:"190px" }} 
            className="sort">

            <h3>SORT BY : </h3>
            <select className="btn" onChange={sortHandler} value={sortBy} >
            <option value="select"> Select </option>
            <option value="title"> TITLE </option>
                <option value="date"> DATE </option>
            </select>
            </div>
             
             { /* SEARCH*/ }
             <div style={{display:"flex" , alignItems:"center" ,justifyContent:"space-between" , width:"170px" }} 
             className="search">
           
            <input type="text" value={SEARCH} onChange={searchHandler} placeholder="ENTER MOVIE NAME" /> 
            <button className="btn" onClick={()=> setConfirmSearch(SEARCH)} style={{margin:"10px"}}> SERACH </button>
         </div>

            {/* FILTER BY Release Date */}
            <div style={{display:"flex" , alignItems:"center"  , width:"150px" , fontSize:"15px" , fontWeight:"bolder" }}
             className="filter">

             <label>FILTER</label>

             <select value={filterByYear} onChange={filterHandler} className="btn">
                 {years.map((year)=> <option value={`${year}`} key={year}> {year} </option>)}
             </select> 
             </div>

             </div>

            <div style={{width:"100%" , height:"2px" , backgroundColor:"skyblue" , marginTop:"10px"}}></div>

            { MOVIES.map( (movie)=> <MovieItem key={movie.id} title={movie.title} desc={movie.text} id={movie.id}  />) }
             

             <div style={{margin:"20px"}}>
             {pages.map((pageindex)=> <button className="btn" key={pageindex} onClick={()=>setPageNumber(pageindex)}> {pageindex+1} </button>)}
             </div>
            </> : 
            <h1> LOADING........</h1>
              }  
           
        </div>
    );
}

export default GetMovies;