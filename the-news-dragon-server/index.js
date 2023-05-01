const express = require('express');
const app = express();
const cors = require('cors')
const port = 5000;
// for deploy process.ENV.PORT || 
const categories = require('./Data/categories.json')
const news = require('./Data/news.json')
app.use(cors())
app.get('/',(req,res)=>{
    res.send('Dragon is running')

})
app.get('/categories',(req,res)=>{
    console.log(categories)
    res.send(categories)

})
app.get('/news',(req,res)=>{
    res.send(news)
})
app.get('/news/:id',(req,res)=>{
    const id =req.params.id;
    console.log(id)
    const selectednews=news.find(n=>n._id===id);
    res.send(selectednews)
})
app.get('/categories/:id',(req,res)=>{
    const id =req.params.id;
    console.log(id)
    if(id == 0){
        res.send(news) 
    }
    else{
        const categoriesnews=news.filter(n=>n.category_id===id);
        res.send(categoriesnews)
    }
    
})
app.listen(port, ()=>{
    console.log(`Dragon API is running on port: ${port}`)
})