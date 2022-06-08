import styled from '@emotion/styled'

const TestCover = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${({theme}) => theme.palette.accent.lightBlue};
	box-shadow: ${({theme}) => theme.boxShadow.base};
	border-radius: ${({theme}) => theme.borderRadius.xsm};
	flex-shrink: 0;
	position: relative;

	& img {
		position: absolute;
		object-fit: cover;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
	}

	${({theme}) => theme.breakpoints.down('xl')} {
		width: 70px;
		height: 70px;
	}

	${({theme}) => theme.breakpoints.up('xl')} {
		width: 116px;
		height: 116px;
	}
`

export default TestCover
