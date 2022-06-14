const {Router} = require('express')
const User = require('../models/User')
const {check, validationResult} = require('express-validator')
const bcrypt = require('bcryptjs')

const router = Router()

router.post('/get-by-id', async (req, res) => {
	try {
		const {userId} = req.body
		const user = await User.findById(userId)
		res.json(user)
	} catch (e) {
		res.status(500).json({
			message: 'Something went wrong. Please try again.'
		})
	}
})

router.post(
	'/update-password',
	[
		check('password', 'Минимальная длинна пароля 6 символов').isLength({
			min: 6
		})
	],
	async (req, res) => {
		try {
			const {userId, password, passwordNew} = req.body
			const user = await User.findById(userId)
			let isMatch = await bcrypt.compare(password, user.password)

			if (!isMatch) {
				return res.status(400).json({
					message: 'Пароль указан неверно, попробуйте снова'
				})
			} else {
				isMatch = password === passwordNew ? true : false
				if (isMatch) {
					return res.status(400).json({
						message: 'Новый пароль не должен совпадать со старым'
					})
				} else {
					const hashedPassword = await bcrypt.hash(passwordNew, 12)
					await User.findByIdAndUpdate(userId, {
						password: hashedPassword
					})
					return res
						.status(200)
						.json({message: 'Password successfully changed'})
				}
			}
		} catch (e) {
			return res.status(500).json({
				message: e.message
			})
		}
	}
)

router.post(
	'/update-nickname',
	[
		check('password', 'Минимальная длинна пароля 6 символов').isLength({
			min: 6
		})
	],
	async (req, res) => {
		try {
			const {userId, name} = req.body
			await User.findByIdAndUpdate(userId, {name: name})
			const user = await User.findById(userId)
			res.json(user)
		} catch (e) {
			return res.status(500).json({
				message: e.message
			})
		}
	}
)

router.post(
	'/update-image',
	[
		check('password', 'Минимальная длинна пароля 6 символов').isLength({
			min: 6
		})
	],
	async (req, res) => {
		try {
			const {userId, image} = req.body
			await User.findByIdAndUpdate(userId, {image: image})
			const user = await User.findById(userId)
			res.json(user)
		} catch (e) {
			return res.status(500).json({
				message: e.message
			})
		}
	}
)

module.exports = router
