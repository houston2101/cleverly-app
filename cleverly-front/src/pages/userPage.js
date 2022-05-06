import FlexContainer from '../components/FlexContainer'
import UserPageWrapper from '../components/UserSettings/UserPageWrapper'
import UserScoreTable from '../sections/UserScoreTable'
import UserSettings from '../sections/UserSettings'
import UserPageSlider from '../sections/UserPageSlider'

const UserPage = () => {
	return (
		<FlexContainer>
			<UserSettings />
			<UserPageWrapper>
				<UserScoreTable />
				<UserPageSlider />
			</UserPageWrapper>
		</FlexContainer>
	)
}

export default UserPage
