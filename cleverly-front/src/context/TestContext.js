import {createContext} from 'react'

const noop = () => {}

export const TestContext = createContext({
	tests: [],
	setTests: noop,
	updateTests: noop,
	addTest: noop,
	getTestById: noop
})
