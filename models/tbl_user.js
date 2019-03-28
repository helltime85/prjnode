/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_user', {
    USER_ID: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    USER_PWD: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    USER_NAME: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    USER_AGE: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    USER_BIRTH: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    USER_EMAIL_ADDR: {
      type: DataTypes.INTEGER(150),
      allowNull: true
    },
    USER_WEIGHT: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    USER_HEIGHT: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    USER_PNUM1: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    USER_PNUM2: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    USER_PNUM3: {
      type: DataTypes.STRING(4),
      allowNull: true
    }
  }, {
    tableName: 'tbl_user'
  });
};
