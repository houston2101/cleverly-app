import styled from '@emotion/styled'

const QuestionaryContentQuestionItemText = styled.div`
	font-family: ${({theme}) => theme.typography.fontFamilyLexend};
	color: ${({theme}) => theme.palette.text.primary};
	font-size: 16px;
	line-height: 20px;
	flex-grow: 1;

	${({theme}) => theme.breakpoints.down('md')} {
		font-size: 14px;
	}

	${({theme}) => theme.breakpoints.up('md')} {
		font-size: 16px;
	}
`

export default QuestionaryContentQuestionItemText
