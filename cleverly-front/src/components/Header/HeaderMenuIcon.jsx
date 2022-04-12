import styled from '@emotion/styled'

const HeaderMenuIcon = styled.button`
	width: 30px;
	height: 30px;
	background-color: transparent;

	${({theme}) => theme.breakpoints.up('md')} {
		display: none;
	}

	& > span {
		content: '';
		display: block;
		position: relative;
		right: 5px;
		width: 23px;
		height: 2px;
		background-color: ${({theme}) => theme.palette.text.secondary};
		border-radius: 25px;

		&::before,
		&::after {
			content: '';
			display: block;
			position: relative;
			width: 17px;
			height: 2px;
			background-color: ${({theme}) => theme.palette.text.secondary};
			border-radius: 25px;
		}

		&::before {
			top: 7px;
		}

		&::after {
			bottom: 9px;
		}
	}
`

export default HeaderMenuIcon
