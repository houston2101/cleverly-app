import {createContext} from 'react'

const noop = () => {}

export const AuthContext = createContext({
	token: null,
	email: null,
	userId: null,
	name: null,
	isAdmin: false,
	login: noop,
	logout: noop,
	isAuthenticated: false
})
