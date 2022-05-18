import React from 'react'
import CategorySelector from './CategorySelector'
import CategoryList from './CategoryList'
import CategoryListItem from './CategoryListItem'
import CategorySelectorWrapper from './CategorySelectorWrapper'

const ChooseCategory = () => {
	const [isOpen, setIsOpen] = React.useState(false)
	const handleIsOpen = () => setIsOpen(!isOpen)

	return (
		<CategorySelectorWrapper>
			<CategorySelector onClick={handleIsOpen}>
				Choose category
			</CategorySelector>
			<CategoryList isOpen={isOpen}>
				<CategoryListItem>category name</CategoryListItem>
				<CategoryListItem>category name</CategoryListItem>
				<CategoryListItem>category name</CategoryListItem>
				<CategoryListItem>category name</CategoryListItem>
				<CategoryListItem>category name</CategoryListItem>
				<CategoryListItem>category name</CategoryListItem>
				<CategoryListItem>category name</CategoryListItem>
				<CategoryListItem>category name</CategoryListItem>
				<CategoryListItem>category name</CategoryListItem>
			</CategoryList>
		</CategorySelectorWrapper>
	)
}

export default ChooseCategory
