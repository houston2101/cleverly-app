import styled from '@emotion/styled'

const QuestionaryContentQuestionText = styled.div`
	font-family: ${({theme}) => theme.typography.fontFamilyLexend};
	color: ${({theme}) => theme.palette.text.primary};
	font-size: 20px;
	line-height: 25px;
	position: relative;
	padding-bottom: 30px;

	${({theme}) => theme.breakpoints.down('md')} {
		font-size: 16px;
	}

	${({theme}) => theme.breakpoints.up('md')} {
		font-size: 20px;
	}

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
