
const express=require("express")
const cors=require("cors")
const Movies=require("./models/movieModel")
const mongoose=require("mongoose")
const server=express()
const db=require("./config/dbConnection")
server.use(express.json())
server.use(express.static("public"))
server.use(cors())
db.dbConnect()

server.get("/movies/all",async(req,res)=>
{
    const allmovies=await Movies.find({})
    res.send(allmovies)
})
server.post("/movies/add",async(req,res)=>
{
    const newmovie=req.body
    const movie=new Movies(newmovie)
    await movie.save()
    res.send("movie saved")
    

})
server.put("/movies/update/:mid",async(req,res)=>
{
    let name=req.params.mid
    let bdy=req.body
    try{
        await Movies.findOneAndReplace({moviename:name},bdy)
        res.send("updated")
    }
    catch(error){
        console.log(error)

    }

})
server.delete("/movies/delete/:mid",async (req,res)=>
{ 
    try{
        await Movies.findOneAndDelete({movieid:req.params.mid})
        res.send("DELETED SUCCESFULLY")
    }
    catch(error){
        console.log(error)

    }

 
})
server.get("/contact",(req,res)=>
{

})



server.listen(3000,()=>console.log("server running"))