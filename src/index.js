const express = require('express'); 
const app = express();
const morgan = require('morgan');

//settings
app.set('port', process.env.PPORT || 3000);
app.set('json spaces', 2);


//Midelwares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Routes

app.use(require('./routes/index.js'));
app.use('/api/movies',require('./routes/movies.js'));
app.use('/api/users', require('./routes/users.js'));


//starting the server
app.listen(app.get('port'), () => {
  console.log(`Server is runing on port ${app.get('port')}`);
});