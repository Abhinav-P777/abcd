const mongoose=require("mongoose")
const dbConnect=()=>{
try{
mongoose.connect("mongodb://localhost:27017/moviedb1")
console.log("DB SUCCESFUL")
}
catch(err){
    console.log(err)
}}
module.exports={dbConnect}