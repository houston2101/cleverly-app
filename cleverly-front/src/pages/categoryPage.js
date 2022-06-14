import React from 'react'
import PageGrid from '../sections/PageGrid'
import TestCardWrapper from '../components/TestCard/TestCardWrapper'
import TestCardLink from '../components/TestCard/TestCardLink'
import TestCardImage from '../components/TestCard/TestCardImage'
import TestCardText from '../components/TestCard/TestCardText'
import TestCartTitle from '../components/TestCard/TestCartTitle'
import TestCardContent from '../components/TestCard/TestCardContent'
import TestCardDetails from '../components/TestCard/TestCardDetails'
import {TestContext} from '../context/TestContext'
import {CategoryContext} from '../context/CategoryContext'
import {useLocation} from 'react-router-dom'
import CategoryCardTitle from '../components/CategoryCard/CategoryCardTitle'
import {UserContext} from '../context/UserContext'

const CategoryPage = () => {
	const {tests} = React.useContext(TestContext)
	const {getCategory} = React.useContext(CategoryContext)
	const slug = useLocation().pathname.split('/').pop()

	const [activeCategory, setActiveCategory] = React.useState({})

	React.useEffect(() => {
		setActiveCategory(getCategory(slug))
	}, [slug, getCategory])

	const {isAdmin} = React.useContext(UserContext)

	return (
		<PageGrid
			title={activeCategory.title}
			content={[
				isAdmin ? (
					<TestCardWrapper key='default'>
						<CategoryCardTitle>+</CategoryCardTitle>
						<TestCardLink to='/constructor' />
					</TestCardWrapper>
				) : null,
				...tests
					.filter((el) => activeCategory._id === el.category)
					.map(({_id, title, image, timeLimit, questions}) => (
						<TestCardWrapper key={_id}>
							{image && <TestCardImage src={image} />}
							<TestCardContent>
								<TestCartTitle>{title}</TestCartTitle>
								<TestCardDetails>
									<TestCardText>
										Questions: {questions.length}
									</TestCardText>
									{timeLimit && (
										<TestCardText>
											Time limit: {timeLimit}
										</TestCardText>
									)}
								</TestCardDetails>
								<TestCardLink to={`/test/${_id}`} />
							</TestCardContent>
						</TestCardWrapper>
					))
			]}
		/>
	)
}

export default CategoryPage
