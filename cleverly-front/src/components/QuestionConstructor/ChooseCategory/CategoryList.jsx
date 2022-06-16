import styled from '@emotion/styled'
import {css} from '@emotion/react'

const dynamicStyles = ({isOpen}) => css`
	${isOpen
		? `
		display: block;
	`
		: `
		display: none;
	`}
`

const CategoryList = styled.ul`
	position: absolute;
	padding: 0 20px;
	top: 100%;
	z-index: 3;
	width: 100%;
	max-height: 200px;
	overflow-y: scroll;
	background-color: ${({theme}) => theme.palette.background.secondary};
	border-radius: ${({theme}) => theme.borderRadius.md};
	box-shadow: ${({theme}) => theme.boxShadow.base};

	${dynamicStyles}
`

export default CategoryList
