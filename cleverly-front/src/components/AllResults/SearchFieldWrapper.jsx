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

const SearchFieldWrapper = styled.div`
	width: 100%;

	${({theme}) => theme.breakpoints.down('lg')} {
		height: 18px;
	}

	${({theme}) => theme.breakpoints.up('lg')} {
		height: 24px;
	}

	${dynamicStyles}
`

export default SearchFieldWrapper
