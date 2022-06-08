import {useEffect, useState, useCallback} from 'react'
import {useHttp} from './http.hook'
import createSlug from '../lib/createSlug'

const useCategories = () => {
	const {loading, request, error} = useHttp()

	const [categories, setCategories] = useState([])

	const getData = async () => {
		const data = await request('/api/category/get', 'GET')
		setCategories(data)
	}

	const updateCategories = useCallback(() => {
		getData()
	}, [])

	const addCategory = useCallback(
		async (title, image) => {
			const newCategories = await request('/api/category/add', 'POST', {
				title,
				link: createSlug(title),
				image
			})
			setCategories(newCategories)
		},
		[request]
	)

	const getCategory = (slug) =>
		categories.find((category) => category.link === slug) || {}

	useEffect(() => {
		getData()
	}, [])

	return {
		categories,
		setCategories,
		updateCategories,
		addCategory,
		loading,
		error,
		getCategory
	}
}

export default useCategories
