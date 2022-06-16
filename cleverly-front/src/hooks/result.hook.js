import {useEffect, useState, useCallback} from 'react'
import {useHttp} from './http.hook'

const useResults = () => {
	const {loading, request, error} = useHttp()

	const [results, setResults] = useState([])

	const getResults = async () => {
		const data = await request('/api/result/get', 'GET')
		setResults(data)
	}

	const getResultsByUserId = async (userId) => {
		const data = await request('/api/result/get-by-user-id', 'POST', {
			id: userId
		})
		setResults(data)
	}

	const getResultById = async (id) => {
		const data = await request('/api/result/get-by-id', 'POST', {id: id})
		return data
	}

	const addResult = useCallback(async (result) => {
		try {
			const data = await request('/api/result/add', 'POST', {
				...result
			})
			setResults(data)
		} catch (e) {
			console.log(e.message)
		}
	}, [])

	return {results, getResultsByUserId, getResults, getResultById, addResult}
}

export default useResults
