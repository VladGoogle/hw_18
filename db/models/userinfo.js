'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.User);
    }
  };
  userInfo.init({
    name: DataTypes.STRING,
    fullName: DataTypes.STRING,
    Age: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'userInfo',
  });
  return userInfo;
};