const {Router} = require('express')
const Test = require('../models/Test')

const router = Router()

router.get('/get', async (req, res) => {
	try {
		const tests = await Test.find()
		res.json(tests)
	} catch (e) {
		res.status(500).json({
			message: 'Something went wrong. Please try again.'
		})
	}
})

router.post('/get-by-id', async (req, res) => {
	try {
		const {id} = req.body
		const test = await Test.findById(id)
		res.json(test)
	} catch (e) {
		res.status(500).json({
			message: 'Something went wrong. Please try again.'
		})
	}
})

router.post('/get-by-category-id', async (req, res) => {
	try {
		const categoryId = req.body
		const tests = await Test.find(categoryId)
		res.json(tests)
	} catch (e) {
		res.status(500).json({
			message: 'Something went wrong. Please try again.'
		})
	}
})

router.post('/remove', async (req, res) => {
	try {
		const testId = req.body
		await Test.findByIdAndDelete(testId)
		const tests = await Test.find()
		res.json(tests)
	} catch (e) {
		res.status(500).json({
			message: 'Something went wrong. Please try again.'
		})
	}
})

router.post('/update', async (req, res) => {})

router.post('/add', async (req, res) => {
	try {
		const {
			title,
			allowEdit,
			timeLimit,
			time,
			passingScore,
			category,
			image,
			questions
		} = req.body
		const test = new Test({
			title,
			allowEdit,
			timeLimit,
			time,
			passingScore,
			category,
			image,
			questions
		})

		await test.save()
		const tests = await Test.find()
		res.json(tests)
	} catch (e) {
		res.status(500).json({
			message: e.message || 'Something went wrong. Please try again.'
		})
	}
})

module.exports = router
