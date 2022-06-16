import {createContext} from 'react'

const noop = () => {}

export const ResultContext = createContext({
	results: [],
	getResults: noop,
	getResultsByUserId: noop,
	getResultById: noop,
	addResult: noop
})
