const User = require('../model/User')
const bcrypt = require('bcryptjs')

module.exports = {

    async store(req, res) {
        const { name, login, password } = req.body;
        const user = new User({ name, login })
        user.hash = await user.setSenha(password)

        await User.create({ name, login, salt: user.salt, hash: user.hash })
            .then(user => res.json({ user, token: user.gerarToken() }))
            .catch(err => res.json({ error: 'Erro ao criar usuário' }))
    },

    async login(req, res) {
        const { login, password } = req.body
        if (!login || !password)
            return res.json({ errors: "Usuário ou senha não informados" })

        const user = await User.findOne({ where: { login: login } })
        if (!user)
            return res.json({ errors: "Usuário não existente" })
        if (!await bcrypt.compare(password, user.hash))
            return res.json({ errors: "Senha inválida" })
        user.enviarAuthJSON()
        res.json({ user, token: user.gerarToken() })
    },

    async index(req, res) {
        User.findByPk(req.userId).then(user => {
            if (!user) return res.status(401).json({ errors: "Usuario não registrado" })
            return res.json({ user: user.enviarAuthJSON(user) })
        }).catch(err => {
            return res.json({ error: 'Usuário não localizado' })
        })
    }
}
