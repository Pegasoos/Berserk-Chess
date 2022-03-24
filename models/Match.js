const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Match extends Model {}

Match.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    match_time:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    player1: {
      type: DataTypes.STRING,
      allowNull: false,
      references:{
        model:'user',
        key:'username'
      }
    },
    player2: {
      type: DataTypes.STRING,
      allowNull:false,
      references:{
        model:'user',
        key:'username'
      }
    },
    winner: {
      type:DataTypes.STRING,
      allowNull:false,
      references:{
        model:'user',
        key:'username'
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'match',
  }
);

module.exports = Match;
