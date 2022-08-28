const express = require('express');

//express app
const app = express();
//register view engine after express
app.set('view engine', 'ejs');


// listen for requests
 app.listen(3000);

 app.get('/', (req, res) => {
     res.render('index');
    //  res.send('<p>HOME PAGE</p>');
    // res.sendFile('./views/index.html', {root: __dirname});
    // console.log('root', {root: __dirname});
 });
 app.get('/about', (req, res) => {
    // res.send('<p>ABOUT PAGE</p>');
    // res.sendFile('./views/about.html', {root: __dirname});
    res.render('about');

});
//redirects
// app.get('/about-us', (req, res) => {
//     // res.send('<p>ABOUT PAGE</p>');
//     res.redirect('/about');
// });
app.get('/blogs/create', (req, res)=>{
    res.render('create')
})
//404 page
app.use((req, res) => {
    // res.send('<p>ABOUT PAGE</p>');
    // res.status(404).sendFile('./views/404.html', {root: __dirname});
    res.status(404).render('404');
});