import styled from '@emotion/styled'

const FooterWrapper = styled.footer`
	background-color: ${({theme}) => theme.palette.background.primary};
	box-shadow: 0px -3px 4px 0px #00000040;
	z-index: 2;
	position: relative;

	${({theme}) => theme.breakpoints.down('md')} {
		padding: 18px 0;
	}

	${({theme}) => theme.breakpoints.up('md')} {
		padding: 34px 0;
	}
`
export default FooterWrapper
