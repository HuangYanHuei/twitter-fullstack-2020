'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('NotificationLikes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      celebrity_id: {
        type: Sequelize.INTEGER
      },
      subscriber_id: {
        type: Sequelize.INTEGER
      },
      likeEvent_id: {
        type: Sequelize.INTEGER
      },
      checked: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('NotificationLikes')
  }
}
