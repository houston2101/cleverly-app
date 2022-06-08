const {Router} = require('express')
const Category = require('../models/Category')

const router = Router()

router.get('/get', async (req, res) => {
	try {
		const categories = await Category.find()
		res.json(categories)
	} catch (e) {
		res.status(500).json({
			message: 'Something went wrong. Please try again.'
		})
	}
})

router.post('/remove', async (req, res) => {
	try {
		const categoryId = req.body
		await Category.findByIdAndDelete(categoryId)
		const categories = await Category.find()
		res.json(categories)
	} catch (e) {
		res.status(500).json({
			message: 'Something went wrong. Please try again.'
		})
	}
})

router.post('/add', async (req, res) => {
	try {
		const {title, link, image} = req.body
		const category = new Category({
			title,
			link,
			image
		})

		await category.save()
		const categories = await Category.find()
		res.json(categories)
	} catch (e) {
		res.status(500).json({
			message: 'Something went wrong. Please try again.'
		})
	}
})

module.exports = router
