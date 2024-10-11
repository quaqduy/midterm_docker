const express = require('express');
const app = express();
const methodOverride = require('method-override');

// Built-in middleware for parsing application/json
app.use(express.json());

// Built-in middleware for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Middleware for method-override
app.use(methodOverride('_method'));

app.set('view engine','ejs');
app.use(express.static('public'));

const studentRouter = require('./routers/studentRouter');
app.use('/', studentRouter);

app.listen(8000, ()=> console.log('Server is running on http://localhost:8000'));