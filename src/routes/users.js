const { Router } = require('express');
const router = Router();

const fetch = require('node-fetch').default;



router.get('/', async (req, res) => {
 const response =  await fetch('https://jsonplaceholder.typicode.com/users');
 const user = await response.json();
 res.json(user);
});


module.exports = router;