const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const minifyHTML = require('express-minify-html-terser');
const compression = require('compression');
require('dotenv').config();

// Middleware
app.use(express.json({limit: '10mb'}));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public'), { maxAge: '2d' }));
app.use(cookieParser());
app.use(expressLayouts);
app.set('layout','layout')
app.use((req, res, next) => { // Make currentPath available in all views
  res.locals.currentPath = req.path;
  next();
});
app.use(compression()); //Method 1

// Minify HTML safely
app.use(
  minifyHTML({
    override: true,
    htmlMinifier: {
      collapseWhitespace: true,
      removeComments: true,
      minifyCSS: true,
      minifyJS: true,
    },
  })
);

// View Engine
app.set('view engine', 'ejs');

//Database Connection
//mongoose.connect(process.env.MONGODB_URI)
mongoose.connect(process.env.MONGODB_URI, {
  tls: true,
  tlsInsecure: false,
  serverSelectionTimeoutMS: 30000
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB error:", err));



// Routes
app.use('/admin',(req, res, next) =>{
  res.locals.layout ='admin/layout';
  next();
})
app.use('/admin', require('./routes/admin'));

app.use('/', require('./routes/frontend'));


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
