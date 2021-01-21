const expressJwt = require('express-jwt')
const secret = require('../config/jwToken')

function getTokenFromHeader(req){
    if(!req.headers.authorization) return null
    const token = req.headers.authorization.split(" ")
    if(token[0]!=="Ecommercy") return null
    return token[1]    
}

const auth = {
    required: expressJwt({
        secret,
        algorithms: ['HS256'],
        userProperty: 'payload',
        getToken: getTokenFromHeader
    }),
    optionals: expressJwt({
        secret,
        algorithms: ['HS256'],
        userProperty: 'payload',
        credentialsRequired:false,
        getToken: getTokenFromHeader
    })
}

module.exports = auth