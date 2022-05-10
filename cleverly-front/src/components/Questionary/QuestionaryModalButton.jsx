import styled from '@emotion/styled'

const QuestionaryModalButton = styled.button`
	${({theme}) => theme.breakpoints.down('md')} {
		display: block;
		width: 50px;
		height: 40px;
		padding: 19px 10px;
		position: absolute;
		left: 0;
		transform: translateX(-100%);
		top: 25px;
		box-shadow: ${({theme}) => theme.boxShadow.asideButton};
		border-radius: 10px 0 0 10px;
		background-color: ${({theme}) => theme.palette.background.secondary};
	}

	${({theme}) => theme.breakpoints.up('md')} {
		display: none;
	}
`

export default QuestionaryModalButton
