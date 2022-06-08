const {Schema, model} = require('mongoose')

const schema = new Schema({
	accessKey: {type: String, required: true, unique: true},
	active: {type: Boolean, required: true}
})
module.exports = model('AccessKey', schema)
