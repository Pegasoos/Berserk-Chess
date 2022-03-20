const User = require('./User');
const Match = require('./Match');

User.belongsToMany(Match, { through: 'UserMatches' });

Match.belongsToMany(User, { through: 'UserMatches' });

module.exports = { User, Match };
