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

const UserScoreTable = () => {
	return (
		<UserScoreTableWrapper>
			<UserResultItem>
				<UserResultOrder />
				<UserResultTests />
				<UserResultTime />
			</UserResultItem>

			{userScoreTableData.map(
				({orderNumber, testName, timeLimitation}) => (
					<UserResultItem key={orderNumber}>
						<UserResultOrder>
							<UserResultOrderNumber>
								{orderNumber}
							</UserResultOrderNumber>
						</UserResultOrder>
						<UserResultTests>
							<UserResultTestName>{testName}</UserResultTestName>
						</UserResultTests>
						<UserResultTime>
							<UserResultTimeValue>
								{timeLimitation}
							</UserResultTimeValue>
						</UserResultTime>
					</UserResultItem>
				)
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
