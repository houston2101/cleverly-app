import React from 'react'
import {AuthContext} from '../context/AuthContext'
import FlexContainer from '../components/FlexContainer'
import UserPageWrapper from '../components/UserSettings/UserPageWrapper'
import UserScoreTable from '../sections/UserScoreTable'
import UserSettings from '../sections/UserSettings'
import UserPageSlider from '../sections/UserPageSlider'

const UserPage = () => {
	const {email, name} = React.useContext(AuthContext)
	return (
		<FlexContainer>
			<UserSettings name={name} email={email} />
			<UserPageWrapper>
				<UserScoreTable />
				<UserPageSlider />
			</UserPageWrapper>
		</FlexContainer>
	)
}

export default UserPage
