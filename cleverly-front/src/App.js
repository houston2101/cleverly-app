import {Global, ThemeProvider} from '@emotion/react'
import useAuth from './hooks/auth.hook'
import SiteRouter from './routes'
import {BrowserRouter as Router} from 'react-router-dom'
import fontLexend from './styles/fontLexend'
import modernNormalize from './styles/modernNormalize'
import reboot from './styles/reboot'
import theme from './theme'
import Layout from './components/Layout'
import {AuthContext} from './context/AuthContext'

const App = () => {
	const {token, login, logout, userId} = useAuth()
	const isAuthenticated = !!token
	return (
		<AuthContext.Provider
			value={{token, login, logout, userId, isAuthenticated}}>
			<Router>
				<ThemeProvider theme={theme}>
					<Global styles={[fontLexend, modernNormalize, reboot]} />
					<Layout>
						<SiteRouter isAuthenticated={isAuthenticated} />
					</Layout>
				</ThemeProvider>
			</Router>
		</AuthContext.Provider>
	)
}

export default App
