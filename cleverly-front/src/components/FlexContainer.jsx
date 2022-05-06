import styled from '@emotion/styled'
import Container from './Container'

const FlexContainer = styled(Container)`
	display: flex;
	justify-content: space-between;

	${({theme}) => theme.breakpoints.down('xl')} {
		flex-direction: column;
		gap: 16px;
	}

	${({theme}) => theme.breakpoints.between('lg', '2xl')} {
		gap: 60px;
	}

	${({theme}) => theme.breakpoints.between('2xl', '3xl')} {
		gap: 80px;
	}

	${({theme}) => theme.breakpoints.up('3xl')} {
		gap: 130px;
	}
`

export default FlexContainer
