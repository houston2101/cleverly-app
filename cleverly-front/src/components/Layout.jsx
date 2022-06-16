import Footer from '../sections/Footer'
import styled from '@emotion/styled'
import Header from '../sections/Header'

const Layout = ({children}) => (
	<>
		<Header />
		<Main>{children}</Main>
		<Footer />
	</>
)

const Main = styled.main`
	display: flex;
	flex-direction: column;
	background-color: ${({theme}) => theme.palette.background.primary};
	position: relative;
	padding-top: 50px;
	padding-bottom: 50px;
	align-items: center;
	justify-content: center;

	${({theme}) => theme.breakpoints.down('md')} {
		min-height: calc(100vh - 50px);
	}

	${({theme}) => theme.breakpoints.up('md')} {
		min-height: calc(100vh - 90px);
	}
`

export default Layout
