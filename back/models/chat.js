const Sequelize = require("sequelize");
const { DataTypes } = require("sequelize");

class Chat extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
          //id가 기본적으로 들어있다.
          chat: {
              type: DataTypes.STRING,
              allowNull: false,
              unique: false,
          },
      },
      {
          modelName:'Chat',
          tableName: 'chats',
          charset: 'utf8mb4',
          collate: 'utf8mb4_general_ci', //이모티콘 저장
          sequelize, 
    });
  }

  static associate(db){
    db.Chat.belongsTo(db.Room);
    db.Chat.belongsTo(db.User);
  }
}

//room, user

module.exports = Chat;