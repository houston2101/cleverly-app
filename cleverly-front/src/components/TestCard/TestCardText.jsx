import styled from '@emotion/styled'

const TestCardText = styled.span`
	font-family: ${({theme}) => theme.typography.fontFamilyLexend};
	color: ${({theme}) => theme.palette.text.secondary};

	${({theme}) => theme.breakpoints.down('md')} {
		font-size: 15px;
		line-height: 20px;
	}

	${({theme}) => theme.breakpoints.up('md')} {
		font-size: 20px;
		line-height: 25px;
	}
`

export default TestCardText
