const router = require('express').Router();

router.get('/', async (req, res) =>{
  res.render('homepage', {logged_in:res.session.logged_in});
});