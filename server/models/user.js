'use strict';
const Helper = require(`../helpers/helper.js`)
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class User extends Model {}

  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg : 'Email is Alredy Exist'
      },
      validate:{
        notEmpty: {
          args: true,
          msg: `Email is required`
        },
        isEmail: {
          args : true,
          msg: `Invalid Email`
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg : `Password is required`
        },
        len:{
          args: [5,8],
          msg: `Password must be more than 5 character and less than 8 character`
        }
      }
    }
  },{
    sequelize,
    hooks:{
      beforeCreate : (user) => {
        user.password = Helper.passwordHash(user.password)
      }
    }
  })

  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};