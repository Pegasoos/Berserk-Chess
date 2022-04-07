const router = require('express').Router();
const { User, Match } = require('../models');
const withAuth = require('../utils/auth');
const sequelize = require('sequelize');
const { Op } = sequelize;
router.get('/', (req, res) =>{
  try{
    res.render('homepage', {logged_in:req.session.logged_in});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
router.get('/login', (req, res) => {
  try{
    if(req.session.logged_in){
      res.redirect('/profile');
      return;
    }
    res.render('login', {logged_in:req.session.logged_in});
  } catch (err){
    console.log(err);
    res.status(500).json(err);
  }
});
router.get('/gameboard', withAuth, (req, res) => {
  try{
    res.render('gameboard', {logged_in:req.session.logged_in});
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
    res.render('leaderboard', { leaders, logged_in:req.session.logged_in });
  } catch (err){
    res.status(500).json(err);
  }
});
router.get('/profile', withAuth, async (req, res) =>{
  try{
    const userData = await User.findOne({where: {username:req.session.username}});
    const user = userData.get({ plain: true});
    const matchData = await Match.findAll({where:{[Op.or]:[{player1:req.session.username}, {player2:req.session.username}]}});
    const matches = matchData.map((match) => match.get({ plain: true }));
    console.log(matches);
    res.render('profile', { logged_in:req.session.logged_in, matches, user}); //
  } catch (err){
    res.status(500).json(err);
  }
});
module.exports = router;