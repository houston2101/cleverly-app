const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
	email: {type: String, required: true, unique: true},
	name: {type: String, required: true, unique: true},
	image: {type: String},
	password: {type: String, required: true, unique: true},
	isAdmin: {type: Boolean, required: true},
	categories: {type: Types.ObjectId, ref: 'Categories'}
})

module.exports = model('User', schema)
