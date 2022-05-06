import styled from '@emotion/styled'

const QuestionaryContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 35px;

	${({theme}) => theme.breakpoints.down('md')} {
	}

	${({theme}) => theme.breakpoints.up('md')} {
	}
`

export default QuestionaryContent
