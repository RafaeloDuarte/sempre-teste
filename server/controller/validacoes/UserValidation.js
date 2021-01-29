const Joi = require("joi")
const isString = require('../../util')

module.exports = {

    store: (req, res, next) => {
        const { name, login, password } = req.body
        let err = [{}]

        if (name === undefined)
            err.push({ erroNome: 'Nome de usuário não preenchido' })
        if (login === undefined)
            err.push({ erroUser: 'Usuário não preenchido' })
        if (password === undefined)
            err.push({
                erroSenha: 'Senha de usuário não preenchido'
            })
        if (isString(name)) err.push({ erroNome: 'Nome de usuário não corresponde à uma string' })
        if (isString(login)) err.push({ erroNome: 'Usuário não corresponde à uma string' })
        if (isString(password)) err.push({ erroNome: 'Senha não corresponde à uma string' })

        res.json(err)
        if (err.length <= 0)
            next()
    },

    login: (req, res, next) => {
        const { login, password } = req.body
        let err = [{}]

        if (login === undefined)
            err.push({ erroUser: 'Usuário não preenchido' })
        if (password === undefined)
            err.push({
                erroSenha: 'Senha de usuário não preenchido'
            })
        if (isString(login)) err.push({ erroNome: 'Usuário não corresponde à uma string' })
        if (isString(password)) err.push({ erroNome: 'Senha não corresponde à uma string' })

        res.json(err)
        if (err.length <= 0)
            next()
    }
}