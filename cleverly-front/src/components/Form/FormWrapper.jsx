import styled from '@emotion/styled'

const FormWrapper = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: ${({theme}) => theme.palette.background.secondary};
	box-shadow: ${({theme}) => theme.boxShadow.base};
	border-radius: ${({theme}) => theme.borderRadius.md};
	margin: auto;
	z-index: 1;
	width: 100%;

	${({theme}) => theme.breakpoints.down('md')} {
		padding: 53px 18px;
		max-width: 335px;
	}

	${({theme}) => theme.breakpoints.up('md')} {
		padding: 60px;
		max-width: 420px;
	}
`

export default FormWrapper
