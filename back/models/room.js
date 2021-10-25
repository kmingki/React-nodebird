const Sequelize = require("sequelize");
const { DataTypes } = require("sequelize");

class Room extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
          //id가 기본적으로 들어있다.
          title:{
              type: DataTypes.STRING(20),
              allowNull: false,
              unique:false,
          },
          max: {
              type: DataTypes.INTEGER,
              allowNull: false,
              defaultValue: 10,
              validate: {
                max: 30,
                min: 2,
              }
          },
      },
      {
          modelName:'Room',
          tableName: 'rooms',
          charset: 'utf8mb4',
          collate: 'utf8mb4_general_ci', //이모티콘 저장
          sequelize, 
    });
  }

  static associate(db){
    db.Room.hasMany(db.Chat);
    db.Room.belongsTo(db.User);
    db.Room.belongsToMany(db.User, { through: 'participate', as: 'participants'});
  }
}

module.exports = Room;