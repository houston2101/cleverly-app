import Form from '../sections/Form'
import Input from '../components/Input'
import Button from '../components/Button/Button'
import React from 'react'
import ButtonText from '../components/Button/ButtonText'
import StartPageBackground from '../components/Form/FormBackground'
import WarningModal from '../sections/WarningModal'
import loginPageData from '../data/en/loginPageData'

const LoginPage = () => {
	const {warningText, title, email, password, signUpButton, logInButton} =
		loginPageData

	return (
		<>
			<StartPageBackground />
			<Form
				title={title}
				inputs={
					<>
						<Input type='email' placeholder={email} />
						<Input type='password' placeholder={password} />
					</>
				}
				buttons={
					<>
						<Button type='button'>
							<ButtonText>{logInButton}</ButtonText>
						</Button>
						<Button type='button'>
							<ButtonText>{signUpButton}</ButtonText>
						</Button>
					</>
				}
			/>
			<WarningModal warningText={warningText} />
		</>
	)
}

export default LoginPage
