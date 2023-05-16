const sequelize  = require('sequelize');

const connection = require('../database/database');

const usuario = connection.define(
    'tbl_usuario',
    {
        nome_usuario:{
            type: sequelize.STRING,
            allowNull: false
        },
        username_usuario:{
            type: sequelize.STRING,
            allowNull: false
        },
        email_usuario:{
            type: sequelize.STRING,
            allowNull: false
        },
        senha_usuario:{
            type: sequelize.STRING,
            allowNull: false
        }
    }
);

//usuario.sync({force:true});

module.exports = usuario;
