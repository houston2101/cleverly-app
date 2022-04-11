import styled from '@emotion/styled'

const FooterText = styled.small`
	font-family: ${({theme}) => theme.typography.fontFamilyLexend};
	color: ${({theme}) => theme.palette.text.primary};

	${({theme}) => theme.breakpoints.down('md')} {
		font-size: 12px;
		line-height: 15px;
	}

	${({theme}) => theme.breakpoints.up('md')} {
		font-size: 18px;
		line-height: 22px;
	}
`

export default FooterText
