import {Link} from 'react-router-dom'
import Button from '../components/Button/Button'
import ButtonText from '../components/Button/ButtonText'

const UndefinedPage = () => (
	<div>
		<h1>404</h1>
		<p>Current page is not exists.</p>
		<Button as={Link} to='/'>
			<ButtonText>Go to main page</ButtonText>
		</Button>
	</div>
)

export default UndefinedPage
