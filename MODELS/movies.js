const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    text : {type : String , required : true} ,
    title : {type : String , required : true}
});

module.exports = mongoose.model("movie" , movieSchema);