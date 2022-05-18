import styled from '@emotion/styled'

const QuestionConstructorDeleteStackItem = styled.span`
	width: 20px;
	height: 20px;
	position: absolute;
	flex-shrink: 0;
	border-radius: ${({theme}) => theme.borderRadius.xxsm};
	background-color: ${({theme}) => theme.palette.primary};
	top: -10px;
	right: -10px;

	&:hover {
		cursor: pointer;
	}

	&::before,
	&::after {
		content: '';
		display: block;
		position: absolute;
		width: 10px;
		height: 2px;
		background-color: ${({theme}) => theme.palette.text.secondary};
		border-radius: ${({theme}) => theme.borderRadius.xxsm};
		top: 9px;
		left: 5px;
	}

	&::before {
		transform: rotate(45deg);
	}

	&::after {
		transform: rotate(-45deg);
	}
`

export default QuestionConstructorDeleteStackItem
