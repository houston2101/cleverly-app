import CheckboxFieldWrapper from './CheckboxFieldWrapper'
import CheckboxField from './CheckboxField'
import CheckboxMark from './CheckboxMark'

const ModalCheckboxField = ({isChecked}) => (
	<CheckboxFieldWrapper>
		<CheckboxField />
		<CheckboxMark isChecked={isChecked} />
	</CheckboxFieldWrapper>
)

export default ModalCheckboxField
