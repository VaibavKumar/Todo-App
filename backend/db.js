const mongoose = require('mongoose')
const { string, boolean } = require('zod')
require('dotenv').config();
mongoose.connect(process.env.DBLINK)

const todoSchema = mongoose.Schema({
    title: String,
    description: String, 
    completed: Boolean
})
const todo =mongoose.model('todo',todoSchema); 
module.exports ={
    todo:todo
}