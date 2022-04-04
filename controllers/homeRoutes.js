const router = require('express').Router();
const { User } = require('../models');

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
router.get('/gameboard', (req, res) =>{
  try{
    res.render('gameboard');
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get('/leaderboard', async (req, res) =>{
  try{
    const leaderData = await User.findAll({
      order:[
        ['wins', 'DESC']
      ]
    });
    const leaders = leaderData.map((player) => player.get({ plain:true }));
    res.render('leaderboard', { leaders });
  } catch (err){
    res.status(500).json(err);
  }
});
router.get('/profile', (req, res) =>{
  try{
    res.render('profile');
  } catch (err){
    res.status(500).json(err);
  }
});
module.exports = router;