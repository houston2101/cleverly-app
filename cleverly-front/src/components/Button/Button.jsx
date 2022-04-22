import styled from '@emotion/styled'

const Button = styled.button`
	background-color: ${({theme}) => theme.palette.accent.lightBlue};
	border-radius: ${({theme}) => theme.borderRadius.md};
	padding: 15px 90px;
	box-shadow: ${({theme}) => theme.boxShadow.icon};
	z-index: 1;
	position: relative;
	overflow: hidden;

	&::after {
		content: '';
		z-index: -1;
		display: block;
		position: absolute;
		border-radius: 50%;
		width: 500px;
		height: 500px;
		background-color: ${({theme}) => theme.palette.primary};
		right: 0;
		top: 0;
		pointer-events: none;
		opacity: 50%;
	}

	&:not(:hover)::after {
		transform: translate(100%, -100%);
		transition: 0.6s ease-in-out;
	}

	&:hover::after {
		transform: translate(30%, -50%);
		transition: 0.8s ease-in-out;
	}
`

export default Button
