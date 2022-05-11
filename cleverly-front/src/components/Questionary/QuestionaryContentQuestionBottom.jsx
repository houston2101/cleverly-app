import styled from '@emotion/styled'

const QuestionaryContentBottom = styled.div`
	display: flex;
	justify-content: space-between;

	${({theme}) => theme.breakpoints.down('xl')} {
	}

	${({theme}) => theme.breakpoints.up('xl')} {
	}
`

export default QuestionaryContentBottom
