import styled from '@emotion/styled'

const QuestionaryModalInfo = styled.div`
	display: flex;
	flex-direction: column;

	${({theme}) => theme.breakpoints.down('xl')} {
		gap: 10px;
	}

	${({theme}) => theme.breakpoints.up('xl')} {
		gap: 15px;
	}
`

export default QuestionaryModalInfo
