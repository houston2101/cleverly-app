import styled from '@emotion/styled'

const QuestionaryContentQuestionItemIndex = styled.span`
	font-family: ${({theme}) => theme.typography.fontFamilyLexend};
	color: ${({theme}) => theme.palette.text.primary};
	font-size: 18px;
	line-height: 22px;

	${({theme}) => theme.breakpoints.down('xl')} {
	}

	${({theme}) => theme.breakpoints.up('xl')} {
	}
`

export default QuestionaryContentQuestionItemIndex
