const User = require('../model/User')
const bcrypt = require('bcryptjs')

module.exports = {

    async store(req, res) {
        const { name, login, password } = req.body;
        const user = new User({ name, login })
        user.hash = await user.setSenha(password)

        await User.create({ name, login, salt: user.salt, hash: user.hash })
            .then(user => res.json({user, token: user.gerarToken()}))
    },

    async login(req, res) {
        const { login, password } = req.body
        const user = await User.findOne({ where: { login: login } })
        if (!await bcrypt.compare(password, user.hash))
            return res.status(401).json({ errors: "Senha inválida" })
        user.enviarAuthJSON()
        res.set('Authorization', user.gerarToken())
        res.status(204).send()
    },

    async index(req, res) {
        User.findByPk(req.userId).then(user => {
            if (!user) return res.status(401).json({ errors: "Usuario não registrado" })
            return res.json({ user: user.enviarAuthJSON(user) })
        })
    }
}
