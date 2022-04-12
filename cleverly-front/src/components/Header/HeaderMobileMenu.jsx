import styled from '@emotion/styled'
import {css} from '@emotion/react'

const dynamicStyles = ({isOpen}) => css`
	${isOpen
		? `
		right: 0;
	`
		: `
		right: 100%;
	`}
`

const HeaderMobileMenu = styled.div`
	${({theme}) => theme.breakpoints.down('md')} {
		display: block;
		position: absolute;
		background-color: ${({theme}) => theme.palette.background.primary};
		width: 100%;
		height: calc(100vh - 50px);
		top: 50px;
		transition: 0.5s;
		/*transition*/

		${dynamicStyles}
	}

	${({theme}) => theme.breakpoints.up('md')} {
		display: flex;
		flex-direction: row;
		width: 100%;
		align-items: center;
		justify-content: space-between;
	}
`

export default HeaderMobileMenu
