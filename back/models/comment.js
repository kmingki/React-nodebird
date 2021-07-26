const Sequelize = require("sequelize");
const { DataTypes } = require("sequelize");

class Comment extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
          //id가 기본적으로 들어있다.
          content : {
              type: DataTypes.TEXT,
              allowNull: false,
          },
      },
      {
          modelName:'Comment',
          tableName: 'comments',
          charset: 'utf8mb4',
          collate: 'utf8mb4_general_ci',
          sequelize, 
    });
  }
  static associate(db){
      db.Comment.belongsTo(db.User);//UserId
      db.Comment.belongsTo(db.Post);//PostId
  }
}

module.exports = Comment;