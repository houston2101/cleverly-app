import {createContext} from 'react'

const noop = () => {}

export const ResultContext = createContext({
	results: [],
	setResults: noop,
	updateResults: noop
})
