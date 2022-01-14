const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req,res) => {
    res.send('<h1>Express App</h1> <p>hello aws<p>');
})

app.get('/products', (req, res)=> {
    res.send([
        {
            productID: 103,
            price: 100
        },
        {
            productID: 102,
            price: 150
        },
    ])
})

app.listen(port, ()=>{
    console.log('listening to port: ',port)
})