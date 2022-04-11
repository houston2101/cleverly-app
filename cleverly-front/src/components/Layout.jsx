import Container from './Container'
import Footer from '../sections/Footer'

const Layout = ({children}) => (
	<>
		<div />
		<Container variant='main'>{children}</Container>
		<Footer />
	</>
)

export default Layout
