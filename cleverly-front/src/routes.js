import {Route, Routes} from 'react-router-dom'
import {
	UserPage,
	TestResultPage,
	SignUpPage,
	QuestionaryPage,
	LoginPage,
	CategoryPage,
	CategoriesPage,
	AllResultsPage,
	ConstructorPage,
	UndefinedPage
} from './pages'

const SiteRouter = ({isAuthenticated}) => {
	return (
		<Routes>
			{isAuthenticated ? (
				<>
					<Route path='/' element={<UserPage />} />
					<Route path='/categories' element={<CategoriesPage />} />
					<Route path='/results' element={<AllResultsPage />} />
					<Route path='/results/:id' element={<TestResultPage />} />
					<Route path='/categories/:id' element={<CategoryPage />} />
					<Route path='/test/:id' element={<QuestionaryPage />} />
					<Route path='/constructor' element={<ConstructorPage />} />
				</>
			) : (
				<>
					<Route path='/' element={<LoginPage />} />
					<Route path='/register' element={<SignUpPage />} />
				</>
			)}
			<Route path='/*' element={<UndefinedPage />} />
		</Routes>
	)
}

export default SiteRouter
