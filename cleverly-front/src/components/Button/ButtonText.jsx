import styled from '@emotion/styled'

const ButtonText = styled.span`
	color: ${({theme}) => theme.palette.text.secondary};
	font-family: ${({theme}) => theme.typography.fontFamilyLexend};
	z-index: 3;

	${({theme}) => theme.breakpoints.down('md')} {
		font-size: 14px;
	}

	${({theme}) => theme.breakpoints.up('md')} {
		font-size: 18px;
	}
`

export default ButtonText
