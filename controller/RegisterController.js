const Register = require('../model/Register')

module.exports = {
    async store(req, res) {
        const { descricao, valor } = req.body
        const register = Register.create({ descricao, valor })

        return res.json(register)
    }
}

