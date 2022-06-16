import {useEffect, useState, useCallback} from 'react'
import {useHttp} from './http.hook'

const useAccessKeys = () => {
	const {loading, request, error} = useHttp()

	const [accessKeys, setAccessKeys] = useState([])

	const getData = async () => {
		const data = await request('/api/access-keys/get', 'GET')
		setAccessKeys(data)
	}

	const addKey = useCallback(async () => {
		const newKeys = await request('/api/access-keys/add', 'GET')
		setAccessKeys(newKeys)
	}, [request])

	const removeKey = useCallback(
		async (id) => {
			const newKeys = await request('/api/access-keys/remove', 'POST', {
				id: id
			})
			setAccessKeys(newKeys)
		},
		[request]
	)

	const changeKey = useCallback(
		async (id, active) => {
			const newKeys = await request(
				'/api/access-keys/change-active',
				'POST',
				{
					id: id,
					active: active
				}
			)
			setAccessKeys(newKeys)
		},
		[request]
	)

	useEffect(() => {
		getData()
	}, [])

	return {
		accessKeys,
		setAccessKeys,
		addKey,
		changeKey,
		removeKey,
		loading,
		error
	}
}

export default useAccessKeys
