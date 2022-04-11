import styled from '@emotion/styled'

const FooterWrapper = styled.footer`
	background-color: ${({theme}) => theme.palette.background.primary};

	${({theme}) => theme.breakpoints.down('md')} {
		padding: 18px 0;
	}

	${({theme}) => theme.breakpoints.up('md')} {
		padding: 34px 0;
	}
`
export default FooterWrapper
