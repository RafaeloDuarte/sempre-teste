module.exports = function isString(str) {
    try {
        Number(str)
        return false
    } catch (err) {
        return true
    }
}