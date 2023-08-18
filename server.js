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

// C -> create. need to first make a model schema
    //  every route that deals with database should have trycatch and sync/await. ( dont always need but good to have )
    app.post( '/', async ( req, res ) => {

        try {
           const post = await Post.create( req.body )
           res.send( post ) // this will have _id from database
        } catch (error) {
            console.error( error )
            // res.status(500).json( { error: error.message } )
        }
    
        // TESTING
        // - headers content-type application/json
        // - body json { }
    })

//  delete route must be above update route...idk y yet.

app.delete( '/:id', async ( req, res ) => {

    let  id  = req.params

    try {
        await Post.findByIdAndDelete( id )
        res.send( 'Post has been deleted' ) // just so we know it ran
    } catch (error) {
        res.status(500).send( "Server error" )
    }



})

// update routes......................

app.put( '/:id', async ( req, res ) => {

    let { id } = req.params

    try {
        // ( what's being updated, what it's being updated to, { rules to follow on return }  )
        const post = await Post.findByIdAndUpdate( id, req.body, {
            new: true // this returns updated post and not pre-updated
        } ) // id will come from req
        res.send( post )
    } catch (error) {
        console.error(error)
        res.status(500).send( "Server error" )
    }
})

app.get('/',(req,res)=>{
    let id = req.params
    try{
        const post = await Post.findByIdUpdate(id,req.body)
    }
})













app.get("/pokemon/:id", (req,res)=>{
    res.render('Show', {pokemon: Pokemon[req.params.id]})
})


app.listen(PORT, (req,res)=>{
    console.log('Listening to 3K RADIO')
});