import styled from '@emotion/styled'

const ModalCloseIcon = styled.span`
	position: absolute;
	width: 40px;
	height: 40px;
	top: 5px;
	right: 5px;

	&:hover {
		cursor: pointer;
	}

	&::before,
	&::after {
		content: '';
		display: block;
		position: absolute;
		width: 38px;
		height: 4px;
		background-color: ${({theme}) => theme.palette.primary};
		border-radius: ${({theme}) => theme.borderRadius.xxsm};
		top: 18px;
	}

	&::before {
		transform: rotate(45deg);
	}

	&::after {
		transform: rotate(-45deg);
	}
`

export default ModalCloseIcon
