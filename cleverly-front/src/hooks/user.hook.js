import {useState, useCallback} from 'react'
import {useHttp} from './http.hook'

const useUser = () => {
	const {request} = useHttp()

	const [email, setEmail] = useState(null)
	const [image, setImage] = useState(null)
	const [name, setName] = useState(null)
	const [isAdmin, setIsAdmin] = useState(null)

	const setUser = async (userId) => {
		const data = await request('/api/user/get-by-id', 'POST', {
			userId: userId
		})
		setEmail(data.email)
		setImage(data.image || null)
		setName(data.name)
		setIsAdmin(data.isAdmin)
	}

	const changePassword = useCallback(
		async (userId, password, newPassword) => {
			const newUser = await request('/api/user/update-password', 'POST', {
				userId: userId,
				password: password,
				passwordNew: newPassword
			})
			setUser(newUser)
		},
		[request]
	)

	const changeName = useCallback(
		async (userId, name) => {
			const newUser = await request('/api/user/update-nickname', 'POST', {
				userId: userId,
				name: name
			})
			setUser(newUser)
		},
		[request]
	)

	const changeImage = useCallback(
		async (userId, image) => {
			const newUser = await request('/api/user/update-image', 'POST', {
				userId: userId,
				image: image
			})
			setUser(newUser)
		},
		[request]
	)

	return {
		email,
		image,
		name,
		isAdmin,
		changePassword,
		changeImage,
		changeName,
		setUser
	}
}

export default useUser
