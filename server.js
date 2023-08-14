const express = require('express')
const app = express()
PORT= 3000

    

const Pokemon = require('./models/pokemon.js');

app.set('view engine', 'jsx')
app.engine('jsx', require("express-react-views").createEngine())

app.get("/" , (req,res)=>{
    res.send('<h1>Welcome to the Pokemon App</h1>')
    
})
// app.get ('/pokemon' , (req,res)=>{
//     res.send(Pokemon)
// })

app.get ("/pokemon", (req,res)=>{
    res.render("Index")

})

app.get('/pokemon/Show',(req,res)=>{
    res.render('Show')
})

app.get('/pokemon/New', (req,res)=>{
    res.render('New')
    
})














app.get("/pokemon/:id", (req,res)=>{
    res.render('Show', {pokemon: Pokemon[req.params.id]})
})


app.listen(PORT, (req,res)=>{
    console.log('Listening to 3K RADIO')
});