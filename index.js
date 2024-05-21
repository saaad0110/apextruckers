const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.json());
app.use(express.static('public'));

app.use(express.urlencoded({ extended: false }));


const routes = require('./routes/allRoutes');

app.use('/', routes);



app.listen(5000, () => {
    console.log('Server is running on port 5000');
  });