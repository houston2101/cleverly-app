import styled from '@emotion/styled'

const SortWrapper = styled.div`
	display: flex;
	flex-direction: column;

	${({theme}) => theme.breakpoints.down('lg')} {
		gap: 20px;
	}

	${({theme}) => theme.breakpoints.up('lg')} {
		gap: 30px;
	}
`

export default SortWrapper
