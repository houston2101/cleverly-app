import ModalCheckboxField from './ModalCheckboxField/ModalCheckboxField'
import ModalCheckboxLabel from './ModalCheckboxLabel'
import ModalCheckboxWrapper from './ModalCheckboxWrapper'
import React from 'react'

const ModalCheckbox = ({text, value, handler}) => {
	return (
		<ModalCheckboxWrapper onClick={() => handler(!value)}>
			<ModalCheckboxField isChecked={value} />
			<ModalCheckboxLabel>{text}</ModalCheckboxLabel>
		</ModalCheckboxWrapper>
	)
}

export default ModalCheckbox
