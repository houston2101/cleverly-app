import {useEffect, useState, useCallback} from 'react'

const storageName = 'userData'

const useAuth = () => {
	const [token, setToken] = useState(null)
	const [userId, setUserId] = useState(null)

	const login = useCallback((jwtToken, id, name, isAdmin) => {
		setToken(jwtToken)
		setUserId(id)

		localStorage.setItem(
			storageName,
			JSON.stringify({
				userId: id,
				token: jwtToken,
				name: name,
				isAdmin: isAdmin
			})
		)
	}, [])

	const logout = useCallback(() => {
		setToken(null)
		setUserId(null)
		localStorage.removeItem(storageName)
	}, [])

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem(storageName))
		if (data && data.token) {
			login(data.token, data.userId, data.name, data.isAdmin)
		}
	}, [login])
	return {login, logout, token, userId}
}

export default useAuth
