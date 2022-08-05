'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class PrivateMessage extends Model {
    static associate (models) {
      PrivateMessage.belongsTo(models.User, { foreignKey: 'senderId' })
    }
  }

  PrivateMessage.init(
    {
      senderId: DataTypes.INTEGER,
      receiverId: DataTypes.INTEGER,
      message: DataTypes.TEXT
    },
    {
      sequelize,
      modelName: 'PrivateMessage',
      tableName: 'PrivateMessages',
      underscored: true
    }
  )
  return PrivateMessage
}
