const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

//connect to mongodb
const dbURI = 'mongodb+srv://kabu1:XkZu7IqNVN7XsNgd@blog.8s2n36y.mongodb.net/blog-savers?retryWrites=true&w=majority'
mongoose.connect(dbURI)
.then((result)=>  app.listen(3000))
.catch((err) => console.log(err));
//express app
const app = express();
//3rd party middleware
//middleware code which runs on the server between getting a request and sending a response
//
//register view engine after express
app.set('view engine', 'ejs');


// listen for requests

 //middleware morgan
app.use(morgan('dev'));

//mongoose and mongo sandbox routes
app.get('/add-blog', (req, res) =>{
    const blog = new Blog({
        title: 'new blog',
        snippet:'about my new blog',
        body: 'more about my new blog'
    });
    blog.save()
    .then((result) =>{
        res.send(result)
    })
    .catch((err) =>{
        console.log(err);
    })
})

//middleware and static files
app.use(express.static('public'));


 app.get('/', (req, res) => {
     const blogs = [
         {title: 'Loving Nodejs', snippet: 'lorem Ipsum'},
         {title: 'Loving Expressjs', snippet: 'lorem Ipsum'},
         {title: 'Loving ejs', snippet: 'lorem Ipsum'},

     ];
     res.render('index', {title: 'Home', blogs});
    //  res.send('<p>HOME PAGE</p>');
    // res.sendFile('./views/index.html', {root: __dirname});
    // console.log('root', {root: __dirname});
 });
 app.get('/about', (req, res) => {
    // res.send('<p>ABOUT PAGE</p>');
    // res.sendFile('./views/about.html', {root: __dirname});
    res.render('about', {title: 'About'});

});
//redirects
// app.get('/about-us', (req, res) => {
//     // res.send('<p>ABOUT PAGE</p>');
//     res.redirect('/about');
// });
app.get('/blogs/create', (req, res)=>{
    res.render('create', {title: 'Create New Blog'});
})
//404 page
app.use((req, res) => {
    // res.send('<p>ABOUT PAGE</p>');
    // res.status(404).sendFile('./views/404.html', {root: __dirname});
    res.status(404).render('404', {title: '404'});
});