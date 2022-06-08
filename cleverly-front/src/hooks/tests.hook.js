import {useEffect, useState, useCallback} from 'react'
import {useHttp} from './http.hook'

const useTests = () => {
	const {loading, request, error} = useHttp()

	const [tests, setTests] = useState([])

	const getData = async () => {
		const data = await request('/api/test/get', 'GET')
		setTests(data)
	}

	const updateTests = useCallback(() => {
		getData()
	}, [])

	const addTest = useCallback(async (test) => {
		try {
			const data = await request('/api/test/add', 'POST', {
				...test
			})
			setTests(data)
		} catch (e) {
			console.log(e.message)
		}
	}, [])

	useEffect(() => {
		getData()
	}, [])

	return {tests, setTests, loading, error, updateTests, addTest}
}

export default useTests
