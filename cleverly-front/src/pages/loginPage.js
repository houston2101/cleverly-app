import React from 'react'
import {Link} from 'react-router-dom'
import Form from '../sections/Form'
import Input from '../components/Input'
import Button from '../components/Button/Button'
import ButtonText from '../components/Button/ButtonText'
import StartPageBackground from '../components/Form/FormBackground'
import WarningModal from '../sections/WarningModal'
import loginPageData from '../data/en/loginPageData'
import {useHttp} from '../hooks/http.hook'
import {AuthContext} from '../context/AuthContext'

const LoginPage = () => {
	const {title, email, password, signUpButton, logInButton} = loginPageData

	const auth = React.useContext(AuthContext)

	const {loading, request, error} = useHttp()
	const [userData, setUserData] = React.useState({
		email: '',
		password: ''
	})

	const handlerSetUserData = (e) => {
		setUserData({...userData, [e.target.name]: e.target.value})
	}

	const handlerLogin = async () => {
		try {
			const data = await request('/api/auth/login', 'POST', {
				...userData
			})
			auth.login(data.token, data.userId)
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
					</>
				}
				buttons={
					<>
						<Button
							type='button'
							onClick={handlerLogin}
							disabled={loading}>
							<ButtonText>{logInButton}</ButtonText>
						</Button>
						<Button as={Link} type='button' to='/register'>
							<ButtonText>{signUpButton}</ButtonText>
						</Button>
					</>
				}
			/>
			{error &&
				error.map((msg) => (
					<WarningModal warningText={msg} key={msg} />
				))}
		</>
	)
}

export default LoginPage
