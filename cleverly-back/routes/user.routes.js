const {Router} = require('express')
const User = require('../models/User')

const router = Router()

router.get('/get', async (req, res) => {
	try {
		const users = await User.find()
		res.json(users)
	} catch (e) {
		res.status(500).json({
			message: 'Something went wrong. Please try again.'
		})
	}
})

router.post('/get-by-id', async (req, res) => {
	try {
		const userId = req.body
		const user = await User.findById(userId)
		res.json(user)
	} catch (e) {
		res.status(500).json({
			message: 'Something went wrong. Please try again.'
		})
	}
})

router.post('/remove', async (req, res) => {
	try {
		const userId = req.body
		await User.findByIdAndDelete(userId)
		const users = await User.find()
		res.json(users)
	} catch (e) {
		res.status(500).json({
			message: 'Something went wrong. Please try again.'
		})
	}
})

router.post('/update', async (req, res) => {
	try {
		const userId = req.body
		await User.findByIdAndUpdate(userId)
		const users = await User.find()
		res.json(users)
	} catch (e) {
		res.status(500).json({
			message: 'Something went wrong. Please try again.'
		})
	}
})

module.exports = router
