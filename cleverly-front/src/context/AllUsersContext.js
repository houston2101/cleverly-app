import {createContext} from 'react'

const noop = () => {}

export const AllUsersContext = createContext({
	users: [],
	getUsers: noop
})
