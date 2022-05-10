import styled from '@emotion/styled'
import {css} from '@emotion/react'

const dynamicStyles = ({
	theme,
	isCorrect,
	isTestDone,
	isActive,
	isAnswered,
	isAllowEdit
}) => css`
	${isTestDone === false
		? `
	
		background-color: ${
			isAnswered
				? theme.palette.accent.lightBlue
				: theme.palette.background.primary
		};
		${isActive && `border: 4px solid ${theme.palette.accent.lightBlue}`};
		${
			(!isAnswered && !isActive) || (isAnswered && isAllowEdit)
				? `
				cursor: pointer;
				&:hover {
					filter: brightness(90%);
				}
		`
				: 'pointer-events: none;'
		}
	`
		: ''}
	${isTestDone === true
		? `
	background-color: ${
		isCorrect
			? theme.palette.accent.lightGreen
			: theme.palette.accent.lightRed
	}
	`
		: ''}
`

const QuestionaryModalItem = styled.div`
	width: 60px;
	height: 90px;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: ${({theme}) => theme.boxShadow.marker};
	border-radius: ${({theme}) => theme.borderRadius.md};
	font-family: ${({theme}) => theme.typography.fontFamilyLexend};
	color: ${({theme}) => theme.palette.text.primary};
	font-size: 18px;
	line-height: 22px;
	transition: 0.3s;
	${dynamicStyles}
`

export default QuestionaryModalItem
