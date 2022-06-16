const {Router} = require('express')
const AccessKey = require('../models/AccessKey')

const router = Router()

router.get('/get', async (req, res) => {
	try {
		const accessK = await AccessKey.find({})
		res.json(accessK)
	} catch (e) {
		res.status(500).json({message: e.message})
	}
})
router.post('/remove', async (req, res) => {
	try {
		const {id} = req.body
		await AccessKey.findByIdAndDelete(id)
		const accessK = await AccessKey.find({})
		res.json(accessK)
	} catch (e) {
		res.status(500).json({message: e.message})
	}
})
router.post('/change-active', async (req, res) => {
	try {
		const {id, active} = req.body
		await AccessKey.findByIdAndUpdate(id, {active: !active})
		const accessKeys = await AccessKey.find({})
		res.json(accessKeys)
	} catch (e) {
		res.status(500).json({message: e.message})
	}
})

router.get('/add', async (req, res) => {
	const rndKey = () => {
		const letters = 'abcdefghijklmnopqrstuvwxyz0123456789'
		let word = ''

		for (let i = 0; i < 15; i++) {
			const letter = letters.charAt(
				Math.floor(Math.random() * letters.length)
			)
			switch (Math.floor(Math.random() * 3)) {
				case 0: {
					word += letter
					break
				}
				case 1: {
					word += letter.toUpperCase()
					break
				}
				case 2: {
					word += letter
					break
				}
			}
		}
		return word
	}
	try {
		const newAccessKey = new AccessKey({
			accessKey: rndKey(),
			active: true
		})
		await newAccessKey.save()
		const accessK = await AccessKey.find({})
		res.json(accessK)
	} catch (e) {
		res.status(500).json({
			message: e.message
		})
	}
})

module.exports = router
