import styled from '@emotion/styled'
const ModalTitle = styled.span`
	font-family: ${({theme}) => theme.typography.fontFamilyLexend};

	${({theme}) => theme.breakpoints.down('md')} {
		font-size: 20px;
	}

	${({theme}) => theme.breakpoints.up('md')} {
		font-size: 24px;
	}
`

export default ModalTitle
