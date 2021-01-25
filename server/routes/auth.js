const jwt = require('jsonwebtoken')
const secret = require('../config/jwToken')

function getTokenFromHeader(req) {
    if (!req.headers.authorization) return null
    const token = req.headers.authorization.split(" ")
    if (token[0] !== "AthenticationBearer") return null
    return token[1]
}

module.exports = (req, res, next) => {

    const authToken = getTokenFromHeader(req)
    if(!authToken) res.status(401).send({error: 'Identification Token Error'})
    jwt.verify(authToken, secret, (err, decoded) => {
        req.userId = decoded.id
        return next()
    })

}