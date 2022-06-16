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
import ModalCheckbox from '../components/ModalCheckbox/ModalCheckbox'
import AdminSignUpWrapper from '../components/Form/AdminSignUpWrapper'

const SignUpPage = () => {
	const {loading, request, error} = useHttp()
	const [userData, setUserData] = React.useState({
		name: '',
		email: '',
		password: '',
		repeatedPassword: '',
		accessKey: null
	})

	const [isChecked, setIsChecked] = React.useState(false)

	const {title, name, email, password, repeat, signUpButton, logInButton} =
		signUpPageData

	const handlerSetUserData = (e) => {
		setUserData({...userData, [e.target.name]: e.target.value})
	}
	document.title = `Cleverly - Регистрация`

	const registerHandler = async () => {
		try {
			const data = await request('/api/auth/register', 'POST', {
				...userData
			})
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
						<AdminSignUpWrapper>
							<ModalCheckbox
								text='sign up as admin'
								value={isChecked}
								handler={setIsChecked}
							/>
							{isChecked && (
								<Input
									type='password'
									name='accessKey'
									value={userData.accessKey}
									onChange={handlerSetUserData}
									placeholder='Enter your access key'
								/>
							)}
						</AdminSignUpWrapper>
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
