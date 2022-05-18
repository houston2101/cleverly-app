import styled from '@emotion/styled'
import {css} from '@emotion/react'

const dynamicStyles = ({allowEdit, theme}) => css`
	${allowEdit
		? `
	width: min-content;
	background: transparent;
`
		: `
	padding: 5px;
	
	${theme.breakpoints.down('lg')} {
		width: calc(100% - 70px);
	}

	${theme.breakpoints.up('2xl')} {
		width: calc(100 % - 80px);
	}
`}
`

const EditTitle = styled.h1`
	font-family: ${({theme}) => theme.typography.fontFamilyLexend};
	text-overflow: ellipsis;
	overflow: hidden;
	max-width: min-content;
	white-space: nowrap;
	font-weight: 400;
	max-width: 400px;

	${({theme}) => theme.breakpoints.down('lg')} {
		font-size: 20px;
		padding-bottom: 2px;
	}

	${({theme}) => theme.breakpoints.between('lg', '2xl')} {
		font-size: 32px;
	}

	${({theme}) => theme.breakpoints.up('2xl')} {
		font-size: 40px;
	}

	${dynamicStyles}
`

export default EditTitle
