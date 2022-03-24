const router = require('express').Router();
const { Match } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const newMatch = await Match.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newMatch);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const matchData = await Match.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!matchData) {
      res.status(404).json({ message: 'No match found with this id!' });
      return;
    }

    res.status(200).json(matchData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
