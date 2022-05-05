import PageGrid from '../sections/PageGrid'
import categoryData from '../data/en/categoryData'
import TestCardWrapper from '../components/TestCard/TestCardWrapper'
import TestCardLink from '../components/TestCard/TestCardLink'
import TestCardImage from '../components/TestCard/TestCardImage'
import TestCardText from '../components/TestCard/TestCardText'
import TestCartTitle from '../components/TestCard/TestCartTitle'
import TestCardContent from '../components/TestCard/TestCardContent'
import TestCardDetails from '../components/TestCard/TestCardDetails'

const CategoryPage = () => {
	const {sectionTitle, tests} = categoryData
	return (
		<PageGrid
			title={sectionTitle}
			content={tests.map(
				({title, link, image, numberOfQuestions, timeLimit}) => (
					<TestCardWrapper key={title}>
						<TestCardImage src={image} />
						<TestCardContent>
							<TestCartTitle>{title}</TestCartTitle>
							<TestCardDetails>
								<TestCardText>
									Questions: {numberOfQuestions}
								</TestCardText>
								<TestCardText>
									Time limit: {timeLimit}
								</TestCardText>
							</TestCardDetails>
							<TestCardLink to={link} />
						</TestCardContent>
					</TestCardWrapper>
				)
			)}
		/>
	)
}

export default CategoryPage
