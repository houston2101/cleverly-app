import styled from '@emotion/styled'

const QuestionaryModalStack = styled.div`
	display: grid;
	grid-template-columns: repeat(6, 1fr);

	${({theme}) => theme.breakpoints.down('xl')} {
		gap: 10px;
	}

	${({theme}) => theme.breakpoints.up('xl')} {
		gap: 20px;
	}
`

export default QuestionaryModalStack
