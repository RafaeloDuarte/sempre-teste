const { Model, DataTypes } = require('sequelize')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const secret = require('../config/jwToken')

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

    setSenha(password) {
        this.salt = crypto.randomBytes(16).toString("hex")
        const custoHash = 12
        return bcrypt.hash(password, custoHash)
    }

    gerarToken() {
        const hoje = new Date()
        const exp = new Date(hoje)
        exp.setDate(hoje.getDate() + 15)

        return jwt.sign({
            id: this.id,
            login: this.login,
            nome: this.nome,
            exp: parseFloat(exp.getTime() / 1000, 10)
        }, secret)
    }

    enviarAuthJSON() {
        return {
            id: this.id,
            nome: this.nome,
            login: this.login,
            token: this.gerarToken()
        }
    }

}

module.exports = User