import styled from '@emotion/styled'
import Container from '../Container'

const QuestionaryWrapper = styled(Container)`
	display: flex;
	overflow: hidden;
	position: relative;
	padding-top: 15px;
	padding-bottom: 15px;
	justify-content: center;

	${({theme}) => theme.breakpoints.down('xl')} {
		flex-direction: column;
		gap: 35px;
	}

	${({theme}) => theme.breakpoints.up('xl')} {
		flex-direction: row;
		gap: 70px;
	}
`

export default QuestionaryWrapper
