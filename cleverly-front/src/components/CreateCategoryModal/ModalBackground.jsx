import styled from '@emotion/styled'

const ModalBackground = styled.div`
	width: 100%;
	height: 100vh;
	display: block;
	position: fixed;
	top: 0;
	z-index: 10;
	opacity: 0.7;
	background-color: ${({theme}) => theme.palette.text.primary};
	left: 0;
`

export default ModalBackground
