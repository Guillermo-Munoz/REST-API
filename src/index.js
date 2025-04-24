const express = require('express'); 
const app = express();
const morgan = require('morgan');

//settings
app.set('port', 3000);


//Midelwares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());



//starting the server
app.listen(app.get('port'), () => {
  console.log(`Server is runing on port ${3000}`);
});