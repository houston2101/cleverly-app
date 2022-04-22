import signUpPageData from '../data/en/signUpPageData'
import Form from '../sections/Form'
import StartPageBackground from '../components/Form/FormBackground'
import Input from '../components/Input'
import Button from '../components/Button/Button'
import ButtonText from '../components/Button/ButtonText'
import WarningModal from '../sections/WarningModal'

const SignUpPage = () => {
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

	return (
		<>
			<StartPageBackground />
			<Form
				title={title}
				inputs={
					<>
						<Input type='text' placeholder={name} />
						<Input type='email' placeholder={email} />
						<Input type='password' placeholder={password} />
						<Input type='password' placeholder={repeat} />
					</>
				}
				buttons={
					<>
						<Button type='button'>
							<ButtonText>{signUpButton}</ButtonText>
						</Button>
						<Button type='button'>
							<ButtonText>{logInButton}</ButtonText>
						</Button>
					</>
				}
			/>
			<WarningModal warningText={warningText} />
		</>
	)
}

export default SignUpPage
