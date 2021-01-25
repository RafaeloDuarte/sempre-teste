const Register = require('../model/Register')

module.exports = {
    async store(req, res) {
        const { descricao, valor } = req.body
        await Register.create({ descricao: descricao, valor: valor })
            .then(register => {
                console.log('passou aqui')
                res.json(register)
            })
            .catch(err => {
                console.log('erro:' + err)
                res.json(err)
            })
    },

    async show(req, res) {
        const registers = await Register.findAll();

        return res.json(registers);
    }
}

