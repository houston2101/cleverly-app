import styled from '@emotion/styled'

const TestInfoWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-right: auto;

	${({theme}) => theme.breakpoints.down('lg')} {
		gap: 10px;
		order: 1;
	}

	${({theme}) => theme.breakpoints.up('lg')} {
		gap: 20px;
	}
`

export default TestInfoWrapper
