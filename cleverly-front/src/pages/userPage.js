import React from 'react'
import {UserContext} from '../context/UserContext'
import FlexContainer from '../components/FlexContainer'
import UserPageWrapper from '../components/UserSettings/UserPageWrapper'
import UserScoreTable from '../sections/UserScoreTable'
import UserSettings from '../sections/UserSettings'
import UserPageSlider from '../sections/UserPageSlider'
import AdminKeysTable from '../sections/AdminKeysTable'

const UserPage = () => {
	const {name, email, image, isAdmin} = React.useContext(UserContext)

	return (
		<FlexContainer>
			<UserSettings name={name} email={email} imageSrc={image} />
			<UserPageWrapper>
				{isAdmin ? <AdminKeysTable /> : <UserScoreTable />}
				<UserPageSlider />
			</UserPageWrapper>
		</FlexContainer>
	)
}

export default UserPage
