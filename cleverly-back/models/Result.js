const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
	userId: {type: Types.ObjectId, ref: 'User', required: true},
	testId: {type: Types.ObjectId, ref: 'Test', required: true},
	isPassed: {type: Boolean, required: true},
	countOfCorrectAnswers: {type: Number, required: true},
	questions: [
		{
			number: {type: Number, required: true},
			answers: [
				{
					index: {type: String, required: true},
					isCorrect: {type: Boolean, required: true}
				}
			]
		}
	]
})

module.exports = model('Result', schema)
