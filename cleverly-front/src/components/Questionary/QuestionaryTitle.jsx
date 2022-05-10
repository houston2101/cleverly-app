import styled from '@emotion/styled'

const QuestionaryTitle = styled.h1`
	font-family: ${({theme}) => theme.typography.fontFamilyLexend};
	color: ${({theme}) => theme.palette.text.primary};
	font-size: 40px;
	font-weight: 400;
	line-height: 50px;
	width: 100%;
`

export default QuestionaryTitle
