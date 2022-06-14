import React from 'react'
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
import useUser from './hooks/user.hook'

const App = () => {
	const {token, login, logout, userId} = useAuth()
	const {
		email,
		image,
		name,
		isAdmin,
		changePassword,
		changeImage,
		changeName,
		setUser
	} = useUser()
	const {
		categories,
		setCategories,
		updateCategories,
		addCategory,
		getCategory,
		loading,
		error
	} = useCategories()
	const {tests, setTests, updateTests, addTest} = useTests()
	const isAuthenticated = !!token

	React.useEffect(() => {
		if (userId) setUser(userId)
	}, [userId])

	return (
		<ThemeProvider theme={theme}>
			<Global styles={[fontLexend, modernNormalize, reboot]} />
			<AuthContext.Provider
				value={{
					token,
					userId,
					login,
					logout,
					isAuthenticated
				}}>
				<UserContext.Provider
					value={{
						email,
						image,
						name,
						isAdmin,
						setUser,
						changePassword,
						changeName,
						changeImage
					}}>
					<CategoryContext.Provider
						value={{
							categories,
							setCategories,
							updateCategories,
							addCategory,
							getCategory,
							loading,
							error
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
									<Router>
										<Layout>
											<SiteRouter
												isAuthenticated={
													isAuthenticated
												}
											/>
										</Layout>
									</Router>
								) : (
									<Router>
										<Layout>
											<SiteRouter
												isAuthenticated={
													isAuthenticated
												}
											/>
										</Layout>
									</Router>
								)}
							</ResultContext.Provider>
						</TestContext.Provider>
					</CategoryContext.Provider>
				</UserContext.Provider>
			</AuthContext.Provider>
		</ThemeProvider>
	)
}

export default App
