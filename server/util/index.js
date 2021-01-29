module.exports = function isString(str) {
    if (typeof str === 'string' || str instanceof String || str === undefined)
        return true
    else
        return false
}