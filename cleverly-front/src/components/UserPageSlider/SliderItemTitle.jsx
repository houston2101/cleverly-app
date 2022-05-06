import styled from '@emotion/styled'

const SliderItemTitle = styled.span`
	font-family: ${({theme}) => theme.typography.fontFamilyLexend};
	color: ${({theme}) => theme.palette.text.primary};
	text-align: center;

	${({theme}) => theme.breakpoints.down('md')} {
		font-size: 14px;
	}

	${({theme}) => theme.breakpoints.up('md')} {
		font-size: 16px;
	}
`

export default SliderItemTitle
