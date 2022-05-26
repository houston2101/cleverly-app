const {Router} = require('express')
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const {check, validationResult} = require('express-validator')
const User = require('../models/User')
const router = Router()

// /api/auth/register
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

			const {name, email, password, isAdmin} = req.body

			const candidate = await User.findOne({email})

			if (candidate) {
				res.status(400).json({message: 'User already exists'})
			}

			const hashedPassword = await bcrypt.hash(password, 12)
			const user = new User({
				name,
				email,
				password: hashedPassword,
				isAdmin
			})
			await user.save()

			res.status(201).json({message: 'User created successfully'})
		} catch (err) {
			res.status(500).json({message: 'Error! Try again later'})
		}
	}
)

// /api/auth/login
router.post(
	'/login',
	[
		check('email', 'Enter correct email').normalizeEmail().isEmail(),
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
				res.status(400).json({message: 'User not found'})
			}

			const isMatch = await bcrypt.compare(password, user.password)

			if (!isMatch) {
				res.status(400).json({message: 'Wrong password. Try again'})
			}

			const token = jwt.sign({userId: user.id}, config.get('jwtSecret'), {
				expiresIn: '1h'
			})

			res.json({
				token,
				name: user.name,
				isAdmin: user.isAdmin,
				userId: user.id
			})
		} catch (err) {
			res.status(500).json({
				message: err.message || 'Error! Try again later'
			})
		}
	}
)

module.exports = router
