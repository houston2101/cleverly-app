import styled from '@emotion/styled'
import {css} from '@emotion/react'

const dynamicStyles = ({theme, isPassed}) => css`
	${isPassed
		? `
		background-color: ${theme.palette.accent.lightGreen};
	`
		: `
		background-color: ${theme.palette.accent.lightRed};

	`}
`
const ResultItemIndicator = styled.div`
	${({theme}) => theme.breakpoints.down('lg')} {
		width: 20px;
	}

	${({theme}) => theme.breakpoints.up('lg')} {
		width: 40px;
	}

	${dynamicStyles}
`

export default ResultItemIndicator
