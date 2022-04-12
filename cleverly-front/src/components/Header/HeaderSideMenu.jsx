import styled from '@emotion/styled'

const HeaderSideMenu = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	justify-content: space-between;

	${({theme}) => theme.breakpoints.down('md')} {
		flex-direction: column;
	}

	${({theme}) => theme.breakpoints.up('md')} {
		flex-direction: row;
	}
`

export default HeaderSideMenu
