import styled from '@emotion/styled'

const QuestionaryModalItemWrapper = styled.div`
	position: relative;

	${({theme}) => theme.breakpoints.down('xl')} {
		width: 40px;
		height: 60px;
	}

	${({theme}) => theme.breakpoints.up('xl')} {
		width: 60px;
		height: 90px;
	}
`

export default QuestionaryModalItemWrapper
