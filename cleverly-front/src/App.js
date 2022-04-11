import {Global, ThemeProvider} from '@emotion/react'
import SiteRouter from './routes'

import fontLexend from './styles/fontLexend'
import modernNormalize from './styles/modernNormalize'
import reboot from './styles/reboot'
import theme from './theme'
import Layout from './components/Layout'

const App = () => (
	<ThemeProvider theme={theme}>
		<Global styles={[fontLexend, modernNormalize, reboot]} />
		<Layout>
			<SiteRouter />
		</Layout>
	</ThemeProvider>
)

export default App
