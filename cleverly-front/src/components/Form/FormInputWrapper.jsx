import styled from '@emotion/styled'

const FormInputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
	max-width: 300px;

	${({theme}) => theme.breakpoints.down('md')} {
		margin-bottom: 39px;
	}

	${({theme}) => theme.breakpoints.up('md')} {
		margin-bottom: 67px;
	}
`

export default FormInputWrapper
