const { Model, DataTypes } = require('sequelize')

class Register extends Model{
    static init(sequelize){
        super.init({
            descricao: DataTypes.STRING,
            valor: DataTypes.FLOAT
        }, {
            sequelize
        })
    }
}

module.exports = Register