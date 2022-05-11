import styled from '@emotion/styled'

const QuestionaryAside = styled.div`
	${({theme}) => theme.breakpoints.down('xl')} {
		display: contents;
	}

	${({theme}) => theme.breakpoints.up('xl')} {
		display: flex;
		flex-direction: column;
		gap: 30px;
		align-items: flex-end;
		min-width: 520px;
		order: 2;
	}
`

export default QuestionaryAside
