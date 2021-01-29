const isString = require('../../util')

module.exports = {

    store: (req, res, next) => {
        const { descricao, valor } = req.body
        let err = [{}]

        if (descricao === undefined)
            err.push({ erroNome: 'Nome de usuário não preenchido' })
        if (valor === undefined)
            err.push({ erroUser: 'Valor não preenchido' })
        if (!isString(descricao)) err.push({ erroNome: 'Descricao de usuário não corresponde à uma string' })
        if (!isNaN(valor)) err.push({ erroNome: 'Valor não corresponde à um número' })

        if (err.length > 1)
            res.json(err)
        next()
    }

}