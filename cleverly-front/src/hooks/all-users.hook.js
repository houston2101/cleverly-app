import {useState} from 'react'
import {useHttp} from './http.hook'

const useAllUsers = () => {
	const {request} = useHttp()

	const [users, setUsers] = useState([])

	const getUsers = async () => {
		const data = await request('/api/user/get', 'GET')
		setUsers(data)
	}

	return {users, getUsers}
}

export default useAllUsers
