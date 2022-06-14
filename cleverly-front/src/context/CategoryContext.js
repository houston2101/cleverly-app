import {createContext} from 'react'

const noop = () => {}

export const CategoryContext = createContext({
	categories: [],
	activeCategory: null,
	setCategories: noop,
	updateCategories: noop,
	addCategory: noop,
	getCategory: noop,
	loading: null,
	error: null
})
