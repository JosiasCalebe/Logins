 //mongodb+srv://<username>:<password>@omnistack-5fdrq.mongodb.net/admin?retryWrites=true&w=majority
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');

const app = express();

//Db Config
const db = require('./config/keys').MongoURI;

mongoose.connect(db, { useNewUrlParser: true})
.then(() => console.log('MongoDB Connected...'))
.catch( err => console.log(err));

//EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

//Router
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server aberto na porta ${PORT}`));
