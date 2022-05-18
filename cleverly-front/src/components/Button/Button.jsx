import styled from '@emotion/styled'
import {css} from '@emotion/react'

const dynamicStyles = ({disabled, theme, dNone, dir}) => css`
	${disabled
		? `
pointer-events: none;
filter: grayscale(100%);
`
		: ''}
	${dNone
		? `
		${theme.breakpoints.down('lg')} {
			padding: 25px 35px;
			span {
				display: none;
			}
		}

		${theme.breakpoints.up('lg')} {
			padding: 15px 25px;
		}
`
		: ''}
	${dir === 'left'
		? `
	div {
		transform: rotate(180deg);

	}
	
	&:hover > div {
		animation: bouncingArrow 1.1s infinite linear reverse;
	}
	`
		: `
	&:hover > div {
		animation: bouncingArrow 1.1s infinite linear;
	}
		`}
`

const Button = styled.button`
	background-color: ${({theme}) => theme.palette.accent.lightBlue};
	border-radius: ${({theme}) => theme.borderRadius.md};
	box-shadow: ${({theme}) => theme.boxShadow.icon};
	z-index: 1;
	position: relative;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 15px;

	@keyframes bouncingArrow {
		0% {
			left: 0;
		}

		25% {
			left: 3px;
		}

		50% {
			left: 0px;
		}

		75% {
			left: -3px;
		}

		100% {
			left: 0px;
		}
	}

	&::after {
		content: '';
		z-index: -1;
		display: block;
		position: absolute;
		border-radius: 50%;
		width: 200%;
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

	${({theme}) => theme.breakpoints.down('lg')} {
		padding: 15px 70px;
	}

	${({theme}) => theme.breakpoints.up('lg')} {
		padding: 15px 90px;
	}

	${dynamicStyles}
`

export default Button
