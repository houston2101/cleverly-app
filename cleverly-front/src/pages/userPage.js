import Container from '../components/Container'
import UserPageWrapper from '../components/UserSettings/UserPageWrapper'
import UserScoreTable from '../sections/UserScoreTable'
import UserSettings from '../sections/UserSettings'

const UserPage = () => {
	return (
		<Container>
			<UserSettings />
			<UserPageWrapper>
				<UserScoreTable />
			</UserPageWrapper>
		</Container>
	)
}

export default UserPage
