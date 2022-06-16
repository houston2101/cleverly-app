const {Router} = require('express')
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const {check, validationResult} = require('express-validator')
const User = require('../models/User')
const AccessKey = require('../models/AccessKey')
const router = Router()

router.post(
	'/register',
	[
		check('email', 'Incorrect email. Check entered email.').isEmail(),
		check(
			'password',
			'Wrong length of password. Password length must be between 8 and 12 symbols.'
		).isLength({min: 8})
	],
	async (req, res) => {
		try {
			const errors = validationResult(req)

			if (!errors.isEmpty()) {
				return res.status(400).json({
					errors: errors.array(),
					message: 'Wrong data entered. Please try again.'
				})
			}

			const {name, email, password, accessKey} = req.body
			const key = await AccessKey.findOne({accessKey: accessKey})
			const candidate = await User.findOne({email})

			if (candidate) {
				return res.status(400).json({message: 'User already exists'})
			}

			const hashedPassword = await bcrypt.hash(password, 12)
			if (!key && accessKey !== null) {
				return res.status(400).json({
					message: 'Access key not found'
				})
			}
			if (!key?.active && accessKey !== null) {
				return res.status(400).json({
					message: 'Access key inactive'
				})
			}
			await AccessKey.updateOne({accessKey: accessKey}, {active: false})

			const user = new User({
				name,
				email,
				password: hashedPassword,
				isAdmin: (key?.active && accessKey !== null) || false
			})
			await user.save()

			res.status(201).json({
				message: 'User commit text created successfully'
			})
		} catch (err) {
			res.status(500).json({message: 'Error! Try again later'})
		}
	}
)

router.post(
	'/login',
	[
		check('email', 'Enter correct email')
			.normalizeEmail({gmail_remove_dots: false})
			.isEmail(),
		check('password', 'Enter correct password').exists()
	],
	async (req, res) => {
		try {
			const errors = validationResult(req)

			if (!errors.isEmpty()) {
				return res.status(400).json({
					errors: errors.array(),
					message:
						'Wrong login or password entered. Please try again.'
				})
			}

			const {email, password} = req.body

			const user = await User.findOne({email})

			if (!user) {
				return res.status(400).json({message: 'User not found'})
			}

			const isMatch = await bcrypt.compare(password, user.password)

			if (!isMatch) {
				return res
					.status(400)
					.json({message: 'Wrong password. Try again'})
			}

			const token = jwt.sign({userId: user.id}, config.get('jwtSecret'), {
				expiresIn: '1h'
			})

			res.json({
				token,
				name: user.name,
				email: user.email,
				isAdmin: user.isAdmin,
				userId: user.id,
				userExist: true
			})
		} catch (err) {
			res.status(500).json({
				message: err.message || 'Error! Try again later'
			})
		}
	}
)

module.exports = router
