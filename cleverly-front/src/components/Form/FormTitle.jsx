import styled from '@emotion/styled'

const FormTitle = styled.span`
	line-height: 1.1;
	color: ${({theme}) => theme.palette.text.primary};
	font-family: ${({theme}) => theme.typography.fontFamilyLexend};

	${({theme}) => theme.breakpoints.down('md')} {
		margin-bottom: 39px;
		font-size: 18px;
	}

	${({theme}) => theme.breakpoints.up('md')} {
		margin-bottom: 68px;
		font-size: 24px;
	}
`

export default FormTitle
