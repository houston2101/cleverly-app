import styled from '@emotion/styled'

const ButtonText = styled.span`
	color: ${({theme}) => theme.palette.text.secondary};
	font-family: ${({theme}) => theme.typography.fontFamilyLexend};
	z-index: 3;

	${({theme}) => theme.breakpoints.down('lg')} {
		font-size: 14px;
	}

	${({theme}) => theme.breakpoints.up('lg')} {
		font-size: 18px;
	}
`

export default ButtonText
