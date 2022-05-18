import styled from '@emotion/styled'

const QuestionaryAside = styled.div`
	${({theme}) => theme.breakpoints.down('xl')} {
		display: contents;
	}

	${({theme}) => theme.breakpoints.up('xl')} {
		display: flex;
		flex-direction: column;
		gap: 15px;
		align-items: flex-start;
		min-width: 520px;
	}
`

export default QuestionaryAside
