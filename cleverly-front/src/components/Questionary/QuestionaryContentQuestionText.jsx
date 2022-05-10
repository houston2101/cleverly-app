import styled from '@emotion/styled'

const QuestionaryContentQuestionText = styled.p`
	font-family: ${({theme}) => theme.typography.fontFamilyLexend};
	color: ${({theme}) => theme.palette.text.primary};
	font-size: 20px;
	line-height: 25px;
	position: relative;
	padding-bottom: 30px;

	&::after {
		content: '';
		width: 50%;
		height: 2px;
		background-color: ${({theme}) => theme.palette.primary};
		position: absolute;
		bottom: 0;
		left: 0;
	}
`

export default QuestionaryContentQuestionText
