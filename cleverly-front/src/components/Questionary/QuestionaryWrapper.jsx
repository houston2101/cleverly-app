import styled from '@emotion/styled'
import Container from '../Container'

const QuestionaryWrapper = styled(Container)`
	display: flex;
	overflow: hidden;
	position: relative;
	padding-top: 15px;
	padding-bottom: 15px;

	${({theme}) => theme.breakpoints.down('xl')} {
		flex-direction: column;
	}

	${({theme}) => theme.breakpoints.up('xl')} {
		flex-direction: none;
		gap: 70px;
	}
`

export default QuestionaryWrapper
