const mongoose = require('mongoose')

var artikel = mongoose.model('artikle', {
    titel: { type: String },
    samenvatting: { type: String},
    content: { type: String },
    date: { type: String }
}, 'art')

module.exports = { artikel }