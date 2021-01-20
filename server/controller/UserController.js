const User = require('../model/User')

module.exports = {
    async store(req, res) {
        const { name, login, password } = req.body
        const user = User.create({ name, login, password })
        
        return res.json(user)
    }
}