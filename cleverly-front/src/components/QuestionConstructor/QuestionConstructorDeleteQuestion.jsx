import styled from '@emotion/styled'

const QuestionConstructorDeleteQuestion = styled.div`
	width: 25px;
	height: 25px;
	position: relative;
	flex-shrink: 0;
	border-radius: ${({theme}) => theme.borderRadius.xsm};
	background-color: ${({theme}) => theme.palette.accent.lightRed};

	&:hover {
		cursor: pointer;
		filter: brightness(0.9);
	}

	&::before,
	&::after {
		content: '';
		display: block;
		position: absolute;
		width: 15px;
		height: 2px;
		background-color: ${({theme}) => theme.palette.text.secondary};
		border-radius: ${({theme}) => theme.borderRadius.xxsm};
		top: 11px;
		left: 5px;
	}

	&::before {
		transform: rotate(45deg);
	}

	&::after {
		transform: rotate(-45deg);
	}
`

export default QuestionConstructorDeleteQuestion
