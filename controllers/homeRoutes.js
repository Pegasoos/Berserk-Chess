const router = require('express').Router();

router.get('/', (req, res) =>{
  try{
    res.render('homepage', {logged_in:res.session.logged_in});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;