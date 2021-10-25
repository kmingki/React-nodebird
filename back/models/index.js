const { Sequelize } = require('sequelize');
const comment = require('./comment');
const hashtag = require('./hashtag');
const image = require('./image');
const post = require('./post');
const user = require('./user');
const chat = require('./chat');
const room = require('./room');

const env = process.env.NODE_ENV || 'development';//기본 값 => 개발시 'development'사용
const config  = require('../config/config')[env];  //'development'

const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.Comment=comment;
db.Hashtag=hashtag;
db.Image=image;
db.Post=post;
db.User=user;
db.Chat=chat;
db.Room=room;

Object.keys(db).forEach(modelName => {
  db[modelName].init(sequelize);
});

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
