const { Model, DataTypes } = require('sequelize')

class User extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            login: DataTypes.STRING,
            salt: DataTypes.STRING,
            hash: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = User