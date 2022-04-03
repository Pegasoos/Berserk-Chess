const router = require('express').Router();

router.get('/', (req, res) =>{
  try{
    res.render('homepage');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
router.get('/login', (req, res) => {
  try{
    res.render('login');
  } catch (err){
    console.log(err);
    res.status(500).json(err);
  }
});
module.exports = router;