const {Router} = require('express');
const router = Router()


//routes
router.get('/test', (req, res) => {
  const data = {
    "name": "juan",
    "website": "fibonachi.com",
  };
  res.json(data);
} )


module.exports = router;
