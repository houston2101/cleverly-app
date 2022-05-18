import styled from '@emotion/styled'

const ButtonArrow = styled.div`
	position: relative;
	width: 28px;
	height: 3px;
	background-color: ${({theme}) => theme.palette.background.secondary};
	border-radius: ${({theme}) => theme.borderRadius.xxsm};

	&:before,
	&:after {
		content: '';
		display: block;
		background-color: ${({theme}) => theme.palette.background.secondary};
		border-radius: ${({theme}) => theme.borderRadius.xxsm};
		width: 16px;
		height: 3px;
		position: absolute;
	}

	&:before {
		transform: rotate(45deg);
		right: -2px;
		bottom: 5px;
	}

	&:after {
		transform: rotate(-45deg);
		right: -2px;
		top: 5px;
	}
`

export default ButtonArrow
