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
import {AllUsersContext} from './context/AllUsersContext'
import useCategories from './hooks/categories.hook'
import useTests from './hooks/tests.hook'
import useUser from './hooks/user.hook'
import useResults from './hooks/result.hook'
import useAllUsers from './hooks/all-users.hook'

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
		error
	} = useCategories()
	const {tests, setTests, updateTests, addTest, loading, getTestById} =
		useTests()
	const {results, getResults, getResultsByUserId, getResultById, addResult} =
		useResults()

	const {users, getUsers} = useAllUsers()
	const isAuthenticated = !!token

	React.useEffect(() => {
		if (userId) setUser(userId)
		if (isAdmin) {
			getResults()
			getUsers()
		} else {
			getResultsByUserId(userId)
		}
	}, [userId, isAdmin])

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
								addTest,
								getTestById
							}}>
							<ResultContext.Provider
								value={{
									results,
									getResults,
									getResultsByUserId,
									getResultById,
									addResult
								}}>
								{isAdmin ? (
									<AllUsersContext.Provider
										value={{users, getUsers}}>
										<Router>
											<Layout>
												<SiteRouter
													isAuthenticated={
														isAuthenticated
													}
												/>
											</Layout>
										</Router>
									</AllUsersContext.Provider>
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
