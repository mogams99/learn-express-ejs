const path = require('path');
const express = require('express');
const app = express();

const tagsData = require('./data.json');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/t/:tag', (req, res) => {
    const { tag } = req.params;
    const data = tagsData[tag];
    if (!data) res.render('notfound', { tag });
    res.render('tag', { data });
});

app.get('/cats', (req, res) => {
    const cats = ['julian', 'eve', 'jhon', 'dlion', 'evanz'];
    res.render('cats', { cats });
});

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('random', {random: num});
});

app.listen(5000, () => {
    console.log(`Running on http://localhost:5000`);
});