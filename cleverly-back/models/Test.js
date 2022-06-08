const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
	title: {type: String, required: true, unique: true},
	allowEdit: {type: Boolean, required: true},
	timeLimit: {type: Boolean, required: true},
	time: {type: Number},
	passingScore: {type: Number, required: true, default: '100%'},
	category: {type: Types.ObjectId, ref: 'Category'},
	image: {type: String},
	questions: [
		{
			number: {type: Number, required: true},
			text: {type: String, required: true},
			allowMultiSelect: {type: Boolean, required: true},
			answers: [
				{
					index: {type: String, required: true},
					text: {type: String, required: true},
					isCorrect: {type: Boolean, required: true}
				}
			]
		}
	]
})

module.exports = model('Test', schema)
