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
import {ResultContext} from '../context/ResultContext'
import {TestContext} from '../context/TestContext'
import {UserContext} from '../context/UserContext'
import {AllUsersContext} from '../context/AllUsersContext'
import {AuthContext} from '../context/AuthContext'

const AllResults = () => {
	const [isOpen, setIsOpen] = React.useState(false)
	const handlerIsOpen = () => setIsOpen(!isOpen)

	const [searchValue, setSearchValue] = React.useState('')

	const handlerSetSearchValue = (e) => setSearchValue(e.target.value)

	const {results} = React.useContext(ResultContext)
	const {tests} = React.useContext(TestContext)
	const {userId} = React.useContext(AuthContext)
	const {isAdmin, name} = React.useContext(UserContext)
	const {users} = React.useContext(AllUsersContext)

	return (
		<AllResultsWrapper>
			<SortWrapper>
				<SortTypesWrapper>
					<SortTypeItem onClick={handlerIsOpen}>
						<SearchIcon />
					</SortTypeItem>
					<SortTypeItem>Test Name</SortTypeItem>
					<SortTypeItem>Result</SortTypeItem>
					<SortTypeItem>Person</SortTypeItem>
					<SortTypeItem>Date</SortTypeItem>
				</SortTypesWrapper>

				<SearchFieldWrapper isOpen={isOpen}>
					<SearchField type='text' onChange={handlerSetSearchValue} />
				</SearchFieldWrapper>
			</SortWrapper>

			<ResultsListWrapper>
				{((isAdmin && users) || name) &&
					results.map(
						({
							_id,
							userId: testUserId,
							testId,
							isPassed,
							countOfCorrectAnswers
						}) => {
							const {title, questions} = tests.find(
								(el) => (el._id = testId)
							)
							if (
								(title
									.toLowerCase()
									.includes(searchValue.toLowerCase()) ||
									searchValue === '') &&
								(isAdmin || userId === testUserId)
							) {
								return (
									<ResultItem
										key={_id}
										to={`/results/${_id}`}>
										<ResultItemIndicator
											isPassed={isPassed}
										/>
										<ResultItemContent>
											<ResultItemText>
												{title}
											</ResultItemText>
											<ResultItemText>
												{countOfCorrectAnswers}/
												{questions.length}
											</ResultItemText>
											<ResultItemText>
												{isAdmin
													? users.find(
															({_id}) =>
																_id ===
																testUserId
													  ).name
													: name}
											</ResultItemText>
											<ResultItemText>
												06.08.2021
											</ResultItemText>
										</ResultItemContent>
									</ResultItem>
								)
							} else {
								return null
							}
						}
					)}
			</ResultsListWrapper>
		</AllResultsWrapper>
	)
}

export default AllResults
