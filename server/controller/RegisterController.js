const Register = require('../model/Register')

module.exports = {
    async store(req, res) {
        const { descricao, valor } = req.body
        const register = await Register.create({ descricao, valor })
            .then(register => res.json(register))
            .catch(console.log('não foi'))

//        return res.json(register)
    },

    async show(req, res) {
        const registers = await Register.findAll();

        return res.json(registers);
    }
}

