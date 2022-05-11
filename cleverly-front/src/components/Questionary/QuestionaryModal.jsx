import styled from '@emotion/styled'
import {css} from '@emotion/react'

const dynamicStyles = ({isOpen}) => css`
	${isOpen
		? `
			transform: translateX(0)
		`
		: `
			transform: translateX(101%)

		`}
`

const QuestionaryModal = styled.div`
	margin-bottom: auto;
	${({theme}) => theme.breakpoints.down('xl')} {
		position: fixed;
		transition: 0.5s linear;
		right: 0%;
		top: 140px;
		z-index: 1;
		${dynamicStyles}
	}

	${({theme}) => theme.breakpoints.up('xl')} {
		position: relative;
	}
`

export default QuestionaryModal
