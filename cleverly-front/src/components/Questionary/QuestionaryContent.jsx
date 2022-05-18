import styled from '@emotion/styled'

const QuestionaryContent = styled.div`
	display: flex;
	width: 100%;
	word-wrap: break-word;
	gap: 35px;
	flex-direction: column;

	${({theme}) => theme.breakpoints.down('xl')} {
		order: 2;
		margin-bottom: 25px;
	}
`

export default QuestionaryContent
