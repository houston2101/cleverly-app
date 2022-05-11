import styled from '@emotion/styled'

const QuestionaryModalButton = styled.button`
	${({theme}) => theme.breakpoints.down('xl')} {
		display: block;
		width: 40px;
		height: 20px;
		padding: 15px 8px;
		position: absolute;
		left: 0;
		transform: translateX(-100%);
		top: 25px;
		box-shadow: ${({theme}) => theme.boxShadow.asideButton};
		border-radius: 10px 0 0 10px;
		background-color: ${({theme}) => theme.palette.background.secondary};
	}

	${({theme}) => theme.breakpoints.up('xl')} {
		display: none;
	}
`

export default QuestionaryModalButton
