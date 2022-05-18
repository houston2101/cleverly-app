import styled from '@emotion/styled'

const ModalInfoWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;

	${({theme}) => theme.breakpoints.down('md')} {
		gap: 21px;
	}

	${({theme}) => theme.breakpoints.up('md')} {
		gap: 35px;
	}
`

export default ModalInfoWrapper
