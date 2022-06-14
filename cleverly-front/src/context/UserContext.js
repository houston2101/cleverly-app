import {createContext} from 'react'

const noop = () => {}

export const UserContext = createContext({
	email: null,
	image: null,
	name: null,
	isAdmin: null,
	setUser: noop,
	changePassword: noop,
	changeName: noop,
	changeImage: noop
})
