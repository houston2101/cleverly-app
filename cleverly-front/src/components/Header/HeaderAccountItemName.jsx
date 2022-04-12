import styled from '@emotion/styled'
import {css} from '@emotion/react'

const dynamicStyles = ({username, theme}) => css`
	${username
		? `
	${theme.breakpoints.down('md')} {
		color: ${theme.palette.primary};
	}
	
	${theme.breakpoints.up('md')} {
		color: ${theme.palette.text.secondary};
	}
	`
		: `
	${theme.breakpoints.down('md')} {
		color: ${theme.palette.text.secondary};
	}

	${theme.breakpoints.up('md')} {
		display: none;
	}`}
`

const HeaderAccountName = styled.span`
	font-family: ${({theme}) => theme.typography.fontFamilyLexend};

	${dynamicStyles}
`

export default HeaderAccountName
