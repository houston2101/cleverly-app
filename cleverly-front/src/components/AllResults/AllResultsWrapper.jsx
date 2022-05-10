import styled from '@emotion/styled'
import AllResults from '../../sections/AllResults'

const AllResultsWrapper = styled.div`
	display: flex;
	flex-direction: column;

	${({theme}) => theme.breakpoints.down('lg')} {
		gap: 11px;
	}

	${({theme}) => theme.breakpoints.up('lg')} {
		gap: 35px;
	}
`

export default AllResultsWrapper
