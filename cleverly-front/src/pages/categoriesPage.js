import CategoryCardWrapper from '../components/CategoryCard/CategoryCardWrapper'
import CategoryCardTitle from '../components/CategoryCard/CategoryCardTitle'
import CategoryCardImage from '../components/CategoryCard/CategoryCardImage'
import CategoryCardLink from '../components/CategoryCard/CategoryCardLink'
import PageGrid from '../sections/PageGrid'
import categoriesData from '../data/en/categoriesData'

const CategoriesPage = () => {
	const {sectionTitle, categories} = categoriesData
	return (
		<PageGrid
			title={sectionTitle}
			content={categories.map(({title, link, image}) => (
				<CategoryCardWrapper key={title}>
					<CategoryCardTitle>{title}</CategoryCardTitle>
					{image && <CategoryCardImage src={image} />}
					<CategoryCardLink to={link} />
				</CategoryCardWrapper>
			))}
		/>
	)
}

export default CategoriesPage
