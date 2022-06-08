const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
	title: {type: String, required: true, unique: true},
	link: {type: String, required: true, unique: true},
	image: {type: String}
})

module.exports = model('Category', schema)
