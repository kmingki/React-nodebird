const Sequelize = require("sequelize");
const { DataTypes } = require("sequelize");

class Post extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
          //id가 기본적으로 들어있다.
          content:{
              type: DataTypes.TEXT,
              allowNull: false,
          },
      },
      {
          modelName:'Post',
          tableName: 'posts',
          charset: 'utf8mb4',
          collate: 'utf8mb4_general_ci', //이모티콘 저장
          sequelize, 
    });
  }
  static associate(db){
      db.Post.hasMany(db.Comment);
      db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag'});
      db.Post.hasMany(db.Image);
      db.Post.belongsTo(db.User);
      db.Post.belongsToMany(db.User, { through: 'Like', as: 'Likers' });
      db.Post.belongsTo(db.Post, { as: 'Retweet' });//posts 테이블에 RetweetId 컬럼 생성
  }
}

module.exports = Post;