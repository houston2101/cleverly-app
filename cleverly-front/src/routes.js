import {Route, Routes} from 'react-router-dom'
import {
	UserPage,
	TestResultPage,
	SignUpPage,
	QuestionaryPage,
	LoginPage,
	CategoryPage,
	CategoriesPage,
	AllResultsPage
} from './pages'

const SiteRouter = () => (
	<Routes>
		<Route path='/' element={<UserPage />} />
		<Route path='/categories' element={<CategoriesPage />} />
		<Route path='/login' element={<LoginPage />} />
		<Route path='/register' element={<SignUpPage />} />
		<Route path='/results' element={<AllResultsPage />} />
		<Route path='/results/:id' element={<TestResultPage />} />
		<Route path='/categories/:id' element={<CategoryPage />} />
		<Route path='/:id' element={<QuestionaryPage />} />
	</Routes>
)

export default SiteRouter
