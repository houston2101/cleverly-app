import styled from '@emotion/styled'

const HeaderWrapper = styled.header`
	background-color: ${({theme}) => theme.palette.primary};
	box-shadow: 0px 10px 25px 0px #33333366;

	${({theme}) => theme.breakpoints.down('md')} {
		height: 50px;
	}

	${({theme}) => theme.breakpoints.up('md')} {
		height: 90px;
	}
`

export default HeaderWrapper
