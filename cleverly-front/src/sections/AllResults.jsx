import React from 'react'
import AllResultsWrapper from '../components/AllResults/AllResultsWrapper'
import SortTypesWrapper from '../components/AllResults/SortTypesWrapper'
import SortWrapper from '../components/AllResults/SortWrapper'
import ResultsListWrapper from '../components/AllResults/ResultsListWrapper'
import ResultItem from '../components/AllResults/ResultItem'
import ResultItemContent from '../components/AllResults/ResultItemContent'
import ResultItemIndicator from '../components/AllResults/ResultItemIndicator'
import SortTypeItem from '../components/AllResults/SortTypeItem'
import SearchIcon from '../components/AllResults/SearchIcon'
import ResultItemText from '../components/AllResults/ResultItemText'
import SearchFieldWrapper from '../components/AllResults/SearchFieldWrapper'
import SearchField from '../components/AllResults/SearchField'

const AllResults = () => {
	const [isOpen, setIsOpen] = React.useState(false)
	const handlerIsOpen = () => setIsOpen(!isOpen)

	return (
		<AllResultsWrapper>
			<SortWrapper>
				<SortTypesWrapper>
					<SortTypeItem onClick={handlerIsOpen}>
						<SearchIcon />
					</SortTypeItem>
					<SortTypeItem>Test Name</SortTypeItem>
					<SortTypeItem>Result</SortTypeItem>
					<SortTypeItem>Time</SortTypeItem>
					<SortTypeItem>Date</SortTypeItem>
				</SortTypesWrapper>

				<SearchFieldWrapper isOpen={isOpen}>
					<SearchField type='text' />
				</SearchFieldWrapper>
			</SortWrapper>

			<ResultsListWrapper>
				<ResultItem>
					<ResultItemIndicator isPassed={true} />
					<ResultItemContent>
						<ResultItemText>Test name</ResultItemText>
						<ResultItemText>15/18</ResultItemText>
						<ResultItemText>05:15</ResultItemText>
						<ResultItemText>06.08.2021</ResultItemText>
					</ResultItemContent>
				</ResultItem>
				<ResultItem>
					<ResultItemIndicator isPassed={false} />
					<ResultItemContent>
						<ResultItemText>Test name</ResultItemText>
						<ResultItemText>15/18</ResultItemText>
						<ResultItemText>05:15</ResultItemText>
						<ResultItemText>06.08.2021</ResultItemText>
					</ResultItemContent>
				</ResultItem>
				<ResultItem>
					<ResultItemIndicator isPassed={true} />
					<ResultItemContent>
						<ResultItemText>Test name</ResultItemText>
						<ResultItemText>15/18</ResultItemText>
						<ResultItemText>05:15</ResultItemText>
						<ResultItemText>06.08.2021</ResultItemText>
					</ResultItemContent>
				</ResultItem>
				<ResultItem>
					<ResultItemIndicator isPassed={true} />
					<ResultItemContent>
						<ResultItemText>Test name</ResultItemText>
						<ResultItemText>15/18</ResultItemText>
						<ResultItemText>05:15</ResultItemText>
						<ResultItemText>06.08.2021</ResultItemText>
					</ResultItemContent>
				</ResultItem>
				<ResultItem>
					<ResultItemIndicator isPassed={false} />
					<ResultItemContent>
						<ResultItemText>Test name</ResultItemText>
						<ResultItemText>15/18</ResultItemText>
						<ResultItemText>05:15</ResultItemText>
						<ResultItemText>06.08.2021</ResultItemText>
					</ResultItemContent>
				</ResultItem>
				<ResultItem>
					<ResultItemIndicator isPassed={false} />
					<ResultItemContent>
						<ResultItemText>Test name</ResultItemText>
						<ResultItemText>15/18</ResultItemText>
						<ResultItemText>05:15</ResultItemText>
						<ResultItemText>06.08.2021</ResultItemText>
					</ResultItemContent>
				</ResultItem>
			</ResultsListWrapper>
		</AllResultsWrapper>
	)
}

export default AllResults
