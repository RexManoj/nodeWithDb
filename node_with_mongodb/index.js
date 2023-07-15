const express=require('express');
const app=express();
const mongoose=require('mongoose');
mongoose.set('strictQuery', true);
app.use(express.json()); 
const a=require('./rex');
const cors=require('cors'); 
app.use(cors()); 
mongoose.connect('mongodb://0.0.0.0:27017',(err)=>{ 
    
    if(err) 
    
    {
        console.log(err)
    }
    else
    {
        console.log("Db connected")  
    }
})

app.get('/',async(req,res)=>{
    // res.send('hai');
    const b=await a.find();
    res.json(b);
})
app.put('/:id',async(req,res)=>{
    const{id}=req.params;
    const c=await a.findById(id);
    c.name=req.body.name;
    c .save()
    res.json(c);

})
app.post('/',async(req,res)=>{
    const b=await a({
        name:req.body.name 
    });

    b.save();
    res.json(b);

}) 

app.delete('/:id',async(req,res)=>{
    const{id}=req.params;
    await a.findByIdAndDelete(id);
    res.json('Deleted successfully')

})

app.listen(1947,()=>console.log('running'))  

