import {css} from '@emotion/react'
import styled from '@emotion/styled'

const dynamicStyles = ({isChecked}) => css`
	${isChecked
		? `
		display: block;
	`
		: `
		display: none;
	`}
`

const CheckboxMark = styled.span`
	display: block;
	position: absolute;
	z-index: 1;

	&::before,
	&::after {
		content: '';
		display: block;
		position: absolute;
		height: 2px;
		border-radius: ${({theme}) => theme.borderRadius.xxsm};
		background-color: ${({theme}) => theme.palette.primary};
	}

	&::before {
		width: 15px;
		transform: rotate(-64deg);
		left: -5px;
		top: -1px;
	}

	&::after {
		width: 9px;
		transform: rotate(55deg);
		top: 2px;
		right: -2px;
	}

	${dynamicStyles}
`

export default CheckboxMark
