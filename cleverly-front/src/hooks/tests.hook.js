import {useEffect, useState, useCallback} from 'react'
import {useHttp} from './http.hook'

const useTests = () => {
	const {loading, request, error} = useHttp()

	const [tests, setTests] = useState([])

	const getData = async () => {
		const data = await request('/api/test/get', 'GET')
		setTests(data)
	}

	const getTestById = async (id) => {
		const data = await request('/api/test/get-by-id', 'POST', {id: id})
		return data
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

	return {tests, setTests, loading, error, updateTests, addTest, getTestById}
}

export default useTests
