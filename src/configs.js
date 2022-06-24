
require('dotenv').config()

const configs = {
    port:process.env.PORT,
    url:process.env.URL,
    getProducts:'products',
    getProduct:'product',
}

module.exports = {
    configs
}