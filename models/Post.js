const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    post : {
        type : String,
        maxLength: 200,
        required : true
    },
})

const Pokemon = mongoose.model('Pokemon',PostSchema)

// this schema is a model for this data type

const Post = mongoose.model( 'Post' , PostSchema )

module.exports = Post