import {useEffect, useState, useCallback} from 'react'

const storageName = 'userData'

const useAuth = () => {
	const [token, setToken] = useState(null)
	const [userId, setUserId] = useState(null)
	const [email, setEmail] = useState(null)
	const [name, setName] = useState(null)
	const [isAdmin, setIsAdmin] = useState(null)

	const login = useCallback((jwtToken, email, id, name, isAdmin) => {
		setToken(jwtToken)
		setUserId(id)
		setName(name)
		setEmail(email)
		setIsAdmin(isAdmin)

		localStorage.setItem(
			storageName,
			JSON.stringify({
				token: jwtToken,
				email: email,
				userId: id,
				name: name,
				isAdmin: isAdmin
			})
		)
	}, [])

	const logout = useCallback(() => {
		setToken(null)
		setUserId(null)
		setEmail(null)
		setName(null)
		setIsAdmin(null)
		localStorage.removeItem(storageName)
	}, [])

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem(storageName))
		if (data && data.token) {
			login(data.token, data.email, data.userId, data.name, data.isAdmin)
		}
	}, [login])
	return {login, logout, token, userId, name, email, isAdmin}
}

export default useAuth
