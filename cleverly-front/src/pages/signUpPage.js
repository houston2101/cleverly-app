import React from 'react'
import {Link} from 'react-router-dom'
import {useHttp} from '../hooks/http.hook'
import signUpPageData from '../data/en/signUpPageData'
import Form from '../sections/Form'
import StartPageBackground from '../components/Form/FormBackground'
import Input from '../components/Input'
import Button from '../components/Button/Button'
import ButtonText from '../components/Button/ButtonText'
import WarningModal from '../sections/WarningModal'

const SignUpPage = () => {
	const {loading, request, error} = useHttp()
	const [userData, setUserData] = React.useState({
		name: '',
		email: '',
		password: '',
		repeatedPassword: '',
		isAdmin: false
	})

	const {
		title,
		name,
		email,
		password,
		repeat,
		signUpButton,
		logInButton,
		warningText
	} = signUpPageData

	const handlerSetUserData = (e) => {
		setUserData({...userData, [e.target.name]: e.target.value})
	}

	React.useEffect(() => {
		console.log(error)
	}, [error])

	const registerHandler = async () => {
		try {
			const data = await request('/api/auth/register', 'POST', {
				...userData
			})
			console.log(data)
		} catch (e) {
			console.log(e)
		}
	}

	return (
		<>
			<StartPageBackground />
			<Form
				title={title}
				inputs={
					<>
						<Input
							type='text'
							name='name'
							value={userData.name}
							onChange={handlerSetUserData}
							placeholder={name}
						/>
						<Input
							type='email'
							name='email'
							value={userData.email}
							onChange={handlerSetUserData}
							placeholder={email}
						/>
						<Input
							type='password'
							name='password'
							value={userData.password}
							onChange={handlerSetUserData}
							placeholder={password}
						/>
						<Input
							type='password'
							name='repeatedPassword'
							value={userData.repeatedPassword}
							onChange={handlerSetUserData}
							placeholder={repeat}
						/>
					</>
				}
				buttons={
					<>
						<Button
							type='button'
							disabled={loading}
							onClick={registerHandler}>
							<ButtonText>{signUpButton}</ButtonText>
						</Button>
						<Button as={Link} to='/' type='button'>
							<ButtonText>{logInButton}</ButtonText>
						</Button>
					</>
				}
			/>
			{error &&
				error.map(({msg}) => (
					<WarningModal key={msg} warningText={msg} />
				))}
		</>
	)
}

export default SignUpPage
