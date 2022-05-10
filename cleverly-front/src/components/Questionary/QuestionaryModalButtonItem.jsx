import styled from '@emotion/styled'

const QuestionaryModalButtonItem = styled.span`
	content: '';
	display: block;
	width: 30px;
	height: 2px;
	background-color: ${({theme}) => theme.palette.text.primary};

	&::before,
	&::after {
		position: relative;
		content: '';
		display: block;
		width: 30px;
		height: 2px;
		background-color: ${({theme}) => theme.palette.text.primary};
	}

	&::before {
		top: 6px;
	}

	&::after {
		bottom: 8px;
	}
`

export default QuestionaryModalButtonItem
