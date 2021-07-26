const Sequelize = require("sequelize");
const { DataTypes } = require("sequelize");

class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
          //id가 기본적으로 들어있다.
          email:{
              type: DataTypes.STRING(30),
              allowNull: false,
              unique: true,
          },
          nickname: {
              type: DataTypes.STRING(30),
              allowNull: false,
          },
          password: {
              type: DataTypes.STRING(100),
              allowNull: false,
          },
      },
      {
          modelName:'User',
          tableName: 'users',
          charset: 'utf8mb4',
          collate: 'utf8mb4_general_ci', //이모티콘 저장
          sequelize, 
    });
  }
  static associate(db){
      db.User.hasMany(db.Comment);
      db.User.hasMany(db.Post);
      db.User.belongsToMany(db.Post, { through: 'Like', as: 'Liked' });
      db.User.belongsToMany(db.User,  { through: 'Follow', as: 'Followers', foreignKey: 'FollowingId'});
      db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followings', foreignKey: 'FollowerId'});
  }
}

module.exports = User;