import AllResults from '../sections/AllResults'
import Container from '../components/Container'
import React from 'react'

const AllResultsPage = () => {
	document.title = `Cleverly - Все результаты`

	return (
		<Container>
			<AllResults />
		</Container>
	)
}

export default AllResultsPage
