import styled from '@emotion/styled'

const QuestionaryTitle = styled.h1`
	font-family: ${({theme}) => theme.typography.fontFamilyLexend};
	color: ${({theme}) => theme.palette.text.primary};
	font-weight: 400;
	line-height: 50px;
	width: 100%;

	${({theme}) => theme.breakpoints.down('lg')} {
		font-size: 32px;
		order: 1;
		padding-bottom: 20px;
	}

	${({theme}) => theme.breakpoints.up('lg')} {
		font-size: 40px;
		padding-bottom: 30px;
	}
`

export default QuestionaryTitle
