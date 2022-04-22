import styled from '@emotion/styled'

const HeaderWrapper = styled.header`
	background-color: ${({theme}) => theme.palette.primary};
	box-shadow: ${({theme}) => theme.boxShadow.header};
	z-index: 10;
	position: relative;

	${({theme}) => theme.breakpoints.down('md')} {
		height: 50px;
	}

	${({theme}) => theme.breakpoints.up('md')} {
		height: 90px;
	}
`

export default HeaderWrapper
