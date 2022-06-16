const {Router} = require('express')
const Result = require('../models/Result')

const router = Router()

router.get('/get', async (req, res) => {
	try {
		const results = await Result.find()
		res.json(results)
	} catch (e) {
		res.status(500).json({
			message: 'Something went wrong. Please try again.'
		})
	}
})

router.post('/get-by-id', async (req, res) => {
	try {
		const {id} = req.body
		const results = await Result.findById(id)
		res.json(results)
	} catch (e) {
		res.status(500).json({
			message: 'Something went wrong. Please try again.'
		})
	}
})

router.post('/get-by-user-id', async (req, res) => {
	try {
		const {id} = req.body
		const results = await Result.find({userId: id})
		res.json(results)
	} catch (e) {
		res.status(500).json({
			message: 'Something went wrong. Please try again.'
		})
	}
})

router.post('/add', async (req, res) => {
	try {
		const result = req.body
		const newResult = new Result(result)

		await newResult.save()
		const results = await Result.find()
		res.json(results)
	} catch (e) {
		res.status(500).json({
			message: 'Something went wrong. Please try again.'
		})
	}
})

module.exports = router
