import styled from '@emotion/styled'

const SendButtonWrapper = styled.div`
	${({theme}) => theme.breakpoints.down('xl')} {
		order: 3;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
	}

	${({theme}) => theme.breakpoints.up('xl')} {
		order: none;
	}
`

export default SendButtonWrapper
