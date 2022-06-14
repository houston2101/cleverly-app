import React from 'react'
import CategoryCardWrapper from '../components/CategoryCard/CategoryCardWrapper'
import CategoryCardTitle from '../components/CategoryCard/CategoryCardTitle'
import CategoryCardImage from '../components/CategoryCard/CategoryCardImage'
import CategoryCardLink from '../components/CategoryCard/CategoryCardLink'
import CategoryModal from '../components/CreateCategoryModal/CategoryModal'
import PageGrid from '../sections/PageGrid'
import categoriesData from '../data/en/categoriesData'
import {CategoryContext} from '../context/CategoryContext'
import {UserContext} from '../context/UserContext'

const CategoriesPage = () => {
	const {sectionTitle} = categoriesData
	const [isOpen, setIsOpen] = React.useState(false)
	const {categories, addCategory} = React.useContext(CategoryContext)

	const handlerIsOpen = () => setIsOpen(!isOpen)

	const handlerAddCategory = ({title, image}) => {
		handlerIsOpen()
		addCategory(title, image)
	}

	const {isAdmin} = React.useContext(UserContext)
	return (
		<>
			<PageGrid
				title={sectionTitle}
				content={[
					isAdmin ? (
						<CategoryCardWrapper
							onClick={handlerIsOpen}
							key='default-item'>
							<CategoryCardTitle>+</CategoryCardTitle>
						</CategoryCardWrapper>
					) : null,
					...categories.map(({_id, title, link, image}) => (
						<CategoryCardWrapper key={_id}>
							<CategoryCardTitle>{title}</CategoryCardTitle>
							{image && <CategoryCardImage src={image} />}
							<CategoryCardLink to={link} />
						</CategoryCardWrapper>
					))
				]}
			/>
			{isOpen && (
				<CategoryModal
					handler={handlerIsOpen}
					buttonHandler={handlerAddCategory}
				/>
			)}
		</>
	)
}

export default CategoriesPage
