import {createContext} from 'react'

const noop = () => {}

export const UserContext = createContext({
	users: [],
	setUsers: noop,
	updateUsers: noop
})
