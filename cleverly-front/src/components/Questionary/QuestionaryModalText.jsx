import styled from '@emotion/styled'

const QuestionaryModalText = styled.div`
	font-family: ${({theme}) => theme.typography.fontFamilyLexend};
	color: ${({theme}) => theme.palette.text.primary};

	${({theme}) => theme.breakpoints.down('xl')} {
		font-size: 14px;
	}

	${({theme}) => theme.breakpoints.up('xl')} {
		font-size: 18px;
	}
`

export default QuestionaryModalText
