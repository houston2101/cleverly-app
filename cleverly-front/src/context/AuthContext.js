import {createContext} from 'react'

const noop = () => {}

export const AuthContext = createContext({
	token: null,
	name: null,
	isAdmin: false,
	userId: null,
	login: noop,
	logout: noop,
	isAuthenticated: false
})
