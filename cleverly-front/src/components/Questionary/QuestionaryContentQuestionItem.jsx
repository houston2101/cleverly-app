import styled from '@emotion/styled'
import {css} from '@emotion/react'

const dynamicStyle = ({theme, isSelected, isCorrect, isTestDone}) => css`
	${isTestDone
		? `
		background-color: ${
			isCorrect
				? theme.palette.accent.lightGreen
				: theme.palette.accent.lightRed
		};
	`
		: `	background-color: ${
				isSelected
					? theme.palette.accent.lightBlue
					: theme.palette.background.primary
		  };`}
`

const QuestionaryContentQuestionItem = styled.div`
	display: flex;
	align-items: center;
	padding: 20px;
	width: 100%;
	min-height: 80px;
	box-shadow: ${({theme}) => theme.boxShadow.answer};
	border-radius: ${({theme}) => theme.borderRadius.sm};
	gap: 20px;

	&:not(:last-of-type) {
		margin-bottom: 35px;
	}

	&:first-of-type {
		margin-top: 5px;
	}

	${dynamicStyle}
`

export default QuestionaryContentQuestionItem
