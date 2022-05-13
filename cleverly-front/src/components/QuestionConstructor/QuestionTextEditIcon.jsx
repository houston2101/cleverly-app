import styled from '@emotion/styled'

const QuestionTextEditIcon = styled.div`
	${({theme}) => theme.breakpoints.down('xl')} {
		padding: 10px;
	}

	${({theme}) => theme.breakpoints.up('xl')} {
		padding: 20px;
	}
`

export default QuestionTextEditIcon
