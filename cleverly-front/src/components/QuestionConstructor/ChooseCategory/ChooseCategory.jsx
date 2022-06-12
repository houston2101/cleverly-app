import React from 'react'
import CategorySelector from './CategorySelector'
import CategoryList from './CategoryList'
import CategoryListItem from './CategoryListItem'
import CategorySelectorWrapper from './CategorySelectorWrapper'
import {CategoryContext} from '../../../context/CategoryContext'

const ChooseCategory = ({category, handlerSetCategory}) => {
	const [isOpen, setIsOpen] = React.useState(false)
	const handleIsOpen = () => setIsOpen(!isOpen)
	const {categories} = React.useContext(CategoryContext)
	return (
		<CategorySelectorWrapper>
			<CategorySelector onClick={handleIsOpen}>
				{(categories &&
					categories?.find(({_id}) => _id === category)?.title) ||
					'Choose category'}
				s
			</CategorySelector>
			<CategoryList isOpen={isOpen}>
				{categories.map(({title, _id}) => (
					<CategoryListItem
						key={_id}
						onClick={() => handlerSetCategory(_id)}>
						{title}
					</CategoryListItem>
				))}
			</CategoryList>
		</CategorySelectorWrapper>
	)
}

export default ChooseCategory
