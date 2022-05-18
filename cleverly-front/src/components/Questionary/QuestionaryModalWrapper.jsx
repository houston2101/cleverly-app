import styled from '@emotion/styled'

const QuestionaryModalWrapper = styled.div`
	background: ${({theme}) => theme.palette.background.secondary};
	display: flex;
	flex-direction: column;
	gap: 20px;
	box-shadow: ${({theme}) => theme.boxShadow.base};
	border-radius: ${({theme}) => theme.borderRadius.md};

	${({theme}) => theme.breakpoints.down('xl')} {
		padding: 30px 10px 30px 15px;
	}

	${({theme}) => theme.breakpoints.up('xl')} {
		padding: 30px 30px 60px;
	}
`

export default QuestionaryModalWrapper
