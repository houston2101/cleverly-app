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
import {UserContext} from './context/UserContext'
import {CategoryContext} from './context/CategoryContext'
import {TestContext} from './context/TestContext'
import {ResultContext} from './context/ResultContext'
import useCategories from './hooks/categories.hook'
import useTests from './hooks/tests.hook'

const App = () => {
	const {token, login, logout, userId, name, email, isAdmin} = useAuth()
	const {
		categories,
		setCategories,
		updateCategories,
		addCategory,
		getCategory
	} = useCategories()
	const {tests, setTests, updateTests, addTest} = useTests()
	const isAuthenticated = !!token
	return (
		<ThemeProvider theme={theme}>
			<Global styles={[fontLexend, modernNormalize, reboot]} />
			<AuthContext.Provider
				value={{
					token,
					email,
					userId,
					name,
					isAdmin,
					login,
					logout,
					isAuthenticated
				}}>
				<CategoryContext.Provider
					value={{
						categories,
						setCategories,
						updateCategories,
						addCategory,
						getCategory
					}}>
					<TestContext.Provider
						value={{
							tests,
							setTests,
							updateTests,
							addTest
						}}>
						<ResultContext.Provider>
							{isAdmin ? (
								<UserContext.Provider>
									<Router>
										<Layout>
											<SiteRouter
												isAuthenticated={
													isAuthenticated
												}
											/>
										</Layout>
									</Router>
								</UserContext.Provider>
							) : (
								<Router>
									<Layout>
										<SiteRouter
											isAuthenticated={isAuthenticated}
										/>
									</Layout>
								</Router>
							)}
						</ResultContext.Provider>
					</TestContext.Provider>
				</CategoryContext.Provider>
			</AuthContext.Provider>
		</ThemeProvider>
	)
}

export default App
