const mongoose = require('mongoose')
const { string, boolean } = require('zod')
mongoose.connect("mongodb+srv://tvaibavkumar:041004%40Vk@cluster0.fppuw.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title: String,
    description: String, 
    completed: Boolean
})
const todo =mongoose.model('todo',todoSchema); 
module.exports ={
    todo:todo
}