
const { text } = require("express");
const MOVIE = require("../MODELS/movies");

const getMovies=async(req, res , next)=>
{


    const page =  parseInt(req.query.page || "0" ) ;
    const search = req.query.search || "";
    const sortBy = req.query.sortBy ;
    const filter = req.query.filter ;
    const sortByValue = sortBy==="date" ? {text : 1} : sortBy==="title" ? {title : 1} : {};

    
    let textt;
    if(filter!=="select")
    {
      textt = filter;
    }

    else
    {
        textt = { $regex : "" , $options : "i"};
    }


    const pageSize = 4

    let Movies;
    try
    {
        Movies = await MOVIE.find
        ({title : {$regex : search , $options : "i"} , text : textt }).limit(pageSize).skip(pageSize*page).sort(sortByValue);
    }

    catch(err)
    {

    }

    const totalPages  = Math.ceil(await MOVIE.countDocuments
        ({title : {$regex : search , $options : "i"} , text : textt })/ pageSize );

    res.json( {movies : Movies.map((item)=>item.toObject( {getters:true}) ) , totalPages : totalPages} ).status(200) ;

};



const addMovie=async(req,res,next)=>
{

      const{NAME , DESC} = req.body;


      let newwMovie;
      try
      {
            newwMovie = new MOVIE({
               title : NAME ,
               text : DESC

           });
      }

      catch(err)
      {
          res.status(500);
      }

      await newwMovie.save();
      res.status(201);
}

exports.getMovies=getMovies;
exports.addMovie = addMovie;