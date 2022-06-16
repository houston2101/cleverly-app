import React from 'react'
import UserResultOrder from '../components/UserScoreTable/UserResultOrder'
import UserScoreTableWrapper from '../components/UserScoreTable/UserScoreTableWrapper'
import UserResultOrderNumber from '../components/UserScoreTable/UserResultOrderNumber'
import UserResultTests from '../components/UserScoreTable/UserResultTests'
import UserResultTestName from '../components/UserScoreTable/UserResultTestName'
import UserResultTime from '../components/UserScoreTable/UserResultTime'
import UserResultTimeValue from '../components/UserScoreTable/UserResultTimeValue'
import userScoreTableData from '../data/en/userScoreTableData'
import UserResultItem from '../components/UserScoreTable/UserResultItem'
import {ResultContext} from '../context/ResultContext'
import {TestContext} from '../context/TestContext'
import {UserContext} from '../context/UserContext'
import {AllUsersContext} from '../context/AllUsersContext'
import {AuthContext} from '../context/AuthContext'

const UserScoreTable = () => {
	const {results} = React.useContext(ResultContext)
	const {tests} = React.useContext(TestContext)
	const {userId} = React.useContext(AuthContext)
	const {isAdmin, name} = React.useContext(UserContext)
	const {users} = React.useContext(AllUsersContext)
	return (
		<UserScoreTableWrapper>
			<UserResultItem>
				<UserResultOrder />
				<UserResultTests />
				<UserResultTime />
			</UserResultItem>

			{[...results]
				.reverse()
				.map(
					(
						{
							_id,
							userId: testUserId,
							testId,
							isPassed,
							countOfCorrectAnswers
						},
						idx
					) => {
						const {title, questions} = tests.find(
							(el) => (el._id = testId)
						)
						return (
							<UserResultItem key={_id}>
								<UserResultOrder>
									<UserResultOrderNumber>
										{idx + 1}
									</UserResultOrderNumber>
								</UserResultOrder>
								<UserResultTests>
									<UserResultTestName>
										{title}
									</UserResultTestName>
								</UserResultTests>
								<UserResultTime>
									<UserResultTimeValue>
										{countOfCorrectAnswers +
											'/' +
											questions.length}
									</UserResultTimeValue>
								</UserResultTime>
							</UserResultItem>
						)
					}
				)}

			<UserResultItem>
				<UserResultOrder />
				<UserResultTests />
				<UserResultTime />
			</UserResultItem>
		</UserScoreTableWrapper>
	)
}

export default UserScoreTable
