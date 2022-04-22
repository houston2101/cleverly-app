import VerificationPageData from '../data/en/verificationPageData'
import StartPageBackground from '../components/Form/FormBackground'
import Form from '../sections/Form'
import Input from '../components/Input'
import ButtonText from '../components/Button/ButtonText'
import Button from '../components/Button/Button'
import WarningModal from '../sections/WarningModal'

const VerificationPage = () => {
	const {title, submitButton, code, warningText} = VerificationPageData

	return (
		<>
			<StartPageBackground />
			<Form
				title={title}
				inputs={
					<>
						<Input type='text' placeholder={code} />
					</>
				}
				buttons={
					<>
						<Button type='button'>
							<ButtonText>{submitButton}</ButtonText>
						</Button>
					</>
				}
			/>
			<WarningModal warningText={warningText} />
		</>
	)
}

export default VerificationPage
