const User = require('../model/User')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const secret = require('../config/jwToken')

module.exports = {
    async store(req, res) {
        const { name, login, password } = req.body
        const { salt, hash } = getToken(password)
        await User.create({ name, login, salt, hash })
            .then(user => res.json(user))
    },

    async login(req, res) {
        const { login, password } = req.body
        await User.findOne({ where: { login: login } }).then(user => {
            if (!user) return res.status(401).json({ errors: "Usuario não registrado" });
            if (!passwordCheck(password, user.hash, user.salt))
                return res.status(401).json({ errors: "Senha inválida" });
            else {
                enviarAuthJSON(user)
                res.json(user)
            }
        })
    },

    async index(req, res) {
        const id = req.query.id
        User.findByPk(id).then(user => {
            if (!user) return res.status(401).json({ errors: "Usuario não registrado" });
            return res.json({ user: enviarAuthJSON(user) });
        })
    }
}

function getToken(password) {
    const salt = crypto.randomBytes(16).toString("hex")
    const hash = crypto.pbkdf2Sync(password, salt, 10000, 512, "sha512").toString("hex")
    return { salt, hash }
}

function passwordCheck(password, hash, salt) {
    const newHash = crypto.pbkdf2Sync(password, salt, 10000, 512, "sha512").toString("hex")
    return newHash === hash
}

function generateToken(user) {
    const currentDate = new Date()
    const exp = new Date(currentDate)
    exp.setDate(currentDate.getDate() + 15)

    return jwt.sign({
        id: user.id,
        login: user.login,
        name: user.name,
        exp: parseFloat(exp.getTime() / 1000, 10)
    }, secret)
}

function enviarAuthJSON(user) {
    return {
        id: user.id,
        name: user.name,
        login: user.login,
        token: generateToken(user)
    }
}