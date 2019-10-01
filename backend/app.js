const express = require('express');
const mongoose = require('mongoose');
const bodyparser =  require('body-parser');
const cors = require('cors');

require('dotenv/config');
const app = express();

app.use(bodyparser.json());
app.use(cors());

// Imports routes
//const postRoute = require('./routes/posts');
const Users = require('./routes/registerRoute');
const Requisitions = require('./routes/requisitionRoute');
const Products = require('./routes/productsRoute');
const PurchaseOrder = require('./routes/purchaseOrderRoute');
const Suppliers = require('./routes/supplierRoute');


//app.use('/posts',postRoute);
app.use('/register',Users);
app.use('/requisitions',Requisitions);
app.use('/products',Products);
app.use('/purchaseOrder',PurchaseOrder);
app.use('/suppliers',Suppliers);


// Middleware
// app.use('/posts',()=>{
//     console.log('This is a middleware running'); 
// })

// app.get('/',(req,res) => {
//     res.send('we are on home');
// });
// app.get('/posts',(req,res) => {
//     res.send('we are on posts section');
// });


// connect to db here
function connect() {
    return new Promise((resolve, reject) => {
        mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true}).then((res, err) => {
            if (err) return reject(err);
            console.log("Connected to database")
            resolve();
        })
    })
};
function close() {
    return mongoose.disconnect();
}
// how to start to listening to the server
connect()
    .then(() => {
        app.listen(3003, function () {
            console.log("Server is running on Port:", 3003);
        });
    })
module.exports = { connect, close, app };