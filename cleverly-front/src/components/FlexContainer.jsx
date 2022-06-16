import styled from '@emotion/styled'
import Container from './Container'

const FlexContainer = styled(Container)`
	display: flex;

	flex: 1 1 100%;

	${({theme}) => theme.breakpoints.down('xl')} {
		flex-direction: column;
		align-items: center;
		gap: 16px;
	}

	${({theme}) => theme.breakpoints.between('lg', '2xl')} {
		gap: 60px;
		justify-content: space-between;
		align-items: center;
	}

	${({theme}) => theme.breakpoints.between('2xl', '3xl')} {
		gap: 80px;
		justify-content: space-between;
		align-items: center;
	}

	${({theme}) => theme.breakpoints.up('3xl')} {
		gap: 130px;
		justify-content: space-between;
		align-items: center;
	}
`

export default FlexContainer
