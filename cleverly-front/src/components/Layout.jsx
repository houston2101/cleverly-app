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
	${({theme}) => theme.breakpoints.down('md')} {
		min-height: calc(100vh - 50px);
	}

	${({theme}) => theme.breakpoints.up('md')} {
		min-height: calc(100vh - 90px);
	}
`

export default Layout
