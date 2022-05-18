import styled from '@emotion/styled'

const ModalWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	background-color: ${({theme}) => theme.palette.background.secondary};
	box-shadow: ${({theme}) => theme.boxShadow.base};
	border-radius: ${({theme}) => theme.borderRadius.md};

	${({theme}) => theme.breakpoints.down('md')} {
		padding: 20px 16px;
	}

	${({theme}) => theme.breakpoints.up('md')} {
		padding: 35px 27px;
	}
`

export default ModalWrapper
