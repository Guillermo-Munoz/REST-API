const {Router}= require('express');
  const router = Router();

const movies = require('../sample.json');
const { parse } = require('path-to-regexp');
console.log(movies);

  router.get('/', (req, res) => {
    
    res.json(movies);
  })
  
  router.post('/', (req, res) => {
    const { title, director, year, rating } = req.body;
    if (title && director && year && rating) {
      const id = movies.length + 1;
      const newMovie = {id, ...req.body};
      movies.push(newMovie)
      res.json(movies);
    } else {
      res.send('wrong data');
    }
  });

 router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { title, director, year, rating } = req.body;
  for (let i = 0; i < movies.length; i++) {
    if ( movies[i].id == id){
      movies[i].title = title;
      movies[i].director = director;
      movies[i].year = year;
      movies[i].rating = rating;
    }
    res.send(movies);
  }
 });

router.delete('/:id', (req, res) => {
  const id = req.params.id
 for (let i = 0; i < movies.length; i++) {
  if ( movies[i].id == id){
    movies.splice(i, 1);
    break;
  }
 }
   res.send(movies);
});


module.exports = router;