import FormWrapper from '../components/Form/FormWrapper'
import FormLogo from '../components/Form/FormLogo'
import FormTitle from '../components/Form/FormTitle'
import FormInputWrapper from '../components/Form/FormInputWrapper'
import FormButtonWrapper from '../components/Form/FormButtonWrapper'

const Form = ({title, inputs, buttons}) => (
	<FormWrapper>
		<FormLogo />
		<FormTitle>{title}</FormTitle>
		<FormInputWrapper>{inputs}</FormInputWrapper>
		<FormButtonWrapper>{buttons}</FormButtonWrapper>
	</FormWrapper>
)

export default Form
