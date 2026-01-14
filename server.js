const express = require('express');
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


app.post('/apply', (req, res) => {
console.log('New application:', req.body);
res.send('Application submitted!');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Running on ' + PORT));
