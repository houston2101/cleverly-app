import styled from '@emotion/styled'

const QuestionText = styled.input`
	width: 100%;
	padding: 10px;
	font-family: ${({theme}) => theme.typography.fontFamilyLexend};
	background-color: transparent;

	${({theme}) => theme.breakpoints.down('xl')} {
		font-size: 14px;
	}

	${({theme}) => theme.breakpoints.down('xl')} {
		font-size: 18px;
	}
`
export default QuestionText
