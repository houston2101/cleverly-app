import styled from '@emotion/styled'

const QuestionaryContent = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	word-wrap: break-word;

	${({theme}) => theme.breakpoints.down('xl')} {
		order: 2;
		margin-bottom: 25px;
	}

	${({theme}) => theme.breakpoints.up('xl')} {
		order: 1;
	}
`

export default QuestionaryContent
