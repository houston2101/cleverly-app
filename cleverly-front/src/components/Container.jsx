import styled from '@emotion/styled'

const Container = styled.div`
	width: 100%;
	flex: 1 1 100%;

	${({theme}) => theme.breakpoints.down('md')} {
		padding-left: 20px;
		padding-right: 20px;
	}

	${({theme}) => theme.breakpoints.between('md', 'xl')} {
		padding-left: 40px;
		padding-right: 40px;
	}

	${({theme}) => theme.breakpoints.between('xl', '2xl')} {
		padding-left: 60px;
		padding-right: 60px;
	}

	${({theme}) => theme.breakpoints.up('2xl')} {
		padding-left: 80px;
		padding-right: 80px;
		max-width: 1920px;
		margin: 0 auto;
	}
`

export default Container
