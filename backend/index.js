// Express backend for todo application 
const express = require("express"); /* importing express */
const cors = require('cors');
const {updatetodo, createtodo} = require('./types')
const {todo} = require('./db')
const app = express()
app.use(express.json());
app.use(cors()); 
// post route
// creating todo
app.post('/todo',(req,res)=>{
    const createPayload = req.body
    const parserPayload = createtodo.safeParse(createPayload);
    if(!parserPayload.success){
        res.status(411).json({
            msg:"You sent worng input",
        })
        return;
    }
    todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed: false  
    })
    res.json({
        msg:"Todo Created"
    })
})
// get route
// getting todos
app.get('/todos',async function(req,res){
    const todos = await todo.find({});
    res.status(200).json({
        todos
    })
})
// put route
// updating todos

app.put('/completed',async function(req,res){
    const updatePayload = req.body
    const parserPayload = updatetodo.safeParse(updatePayload);
    if(!parserPayload.success){
        res.status(411).json({
            msg:"You sent worng input",
        }) 
        return;
    }
    await todo.update({
        _id: req.body.id
    },{
        completed:true
    })
    res.json({
        msg: "Todo mark as completed"
    })
})
// port number
app.listen(3000);
