const {Router} = require('express')
const config = require('config')
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
		const {reqAccessKey} = req.body
		await AccessKey.deleteOne({reqAccessKey})
		res.json({
			message: 'Ключ удален'
		})
	} catch (e) {
		res.status(500).json({message: e.message})
	}
})
router.post('/change-active', async (req, res) => {
	try {
		const {reqAccessKey} = req.body
		const accessK = await AccessKey.findOne({reqAccessKey})
		await AccessKey.updateOne({reqAccessKey}, {active: !accessK.active})
		res.json({
			message: 'Ключ изменен'
		})
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
		res.json({
			message: 'Новый ключ создан'
		})
	} catch (e) {
		res.status(500).json({
			message: e.message
		})
	}
})

module.exports = router
