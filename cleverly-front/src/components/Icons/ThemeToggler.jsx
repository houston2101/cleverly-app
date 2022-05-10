import styled from '@emotion/styled'
import {css} from '@emotion/react'

const dynamicStyles = ({theme, isLight}) => css`
	${isLight
		? ''
		: `

		.switch {
			${theme.breakpoints.down('lg')} {
				width: 36px;
				height: 36px;
			}

			${theme.breakpoints.up('lg')} {
				width: 56px;
				height: 56px;
			}

			&::before {
				left: 30%;
				top: 30%;
				width: 90%;
				height: 90%;
			}

			&::after {
				width: 0%;
				height: 0%;
			}

			& .sun {
				width: 100%;
				height: 100%;

			}

			& .rays {
				&::before,
				&::after {
					height: 50%;
				}
			}
		}
	`}
`

const Component = styled.button`
	background-color: ${({theme}) => theme.palette.accent.lightBlue};
	transition: all ease-in-out 0.3s;

	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	overflow: hidden;

	${({theme}) => theme.breakpoints.down('lg')} {
		width: 60px;
		height: 60px;
	}

	${({theme}) => theme.breakpoints.up('lg')} {
		width: 80px;
		height: 80px;
	}

	& .switch {
		position: relative;
		left: 0;
		top: 0;
		transition: all ease-out 0.3s;

		${({theme}) => theme.breakpoints.down('lg')} {
			width: 26px;
			height: 26px;
		}

		${({theme}) => theme.breakpoints.up('lg')} {
			width: 36px;
			height: 36px;
		}

		&::before,
		&::after {
			content: ' ';
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			border-radius: 50%;
			background-color: ${({theme}) => theme.palette.accent.lightBlue};
			transition: all 0.3s;
		}

		&::before {
			width: 0%;
			height: 0%;
			z-index: 10;
		}

		&::after {
			width: 50%;
			height: 50%;
		}

		& .sun {
			display: block;
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			border-radius: 50%;
			width: 100%;
			height: 100%;
			background: ${({theme}) => theme.palette.primary};
			transition: all ease-in 0.3s;

			${({theme}) => theme.breakpoints.down('lg')} {
				border: 4px solid ${({theme}) => theme.palette.accent.lightBlue};
			}

			${({theme}) => theme.breakpoints.up('lg')} {
				border: 5px solid ${({theme}) => theme.palette.accent.lightBlue};
			}
		}

		& .rays {
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;

			&::before,
			&::after {
				content: '';
				display: block;
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translate(-50%, -50%);
				background: ${({theme}) => theme.palette.primary};
				width: 12%;
				height: 150%;
				border-radius: 10px;
				transition: all ease-out 0.3s;
			}

			&.ray-1 {
				&::before {
					transform: translate(-50%, -50%) rotate(0deg);
				}
				&::after {
					transform: translate(-50%, -50%) rotate(45deg);
				}
			}

			&.ray-2 {
				&::before {
					transform: translate(-50%, -50%) rotate(90deg);
				}

				&::after {
					transform: translate(-50%, -50%) rotate(135deg);
				}
			}
		}
	}

	${dynamicStyles}
`

const ThemeToggler = ({isLight, handle}) => (
	<Component isLight={isLight} onClick={handle}>
		<div class='switch'>
			<div class='rays ray-1'></div>
			<div class='rays ray-2'></div>
			<span class='sun'></span>
		</div>
	</Component>
)

export default ThemeToggler
