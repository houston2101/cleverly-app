import React from 'react'
import {useLocation} from 'react-router-dom'
import Questionary from '../sections/Questionary'
import {TestContext} from '../context/TestContext'

const QuestionaryPage = () => {
	const [activeTest, setActiveTest] = React.useState({})
	const [timer, setTimer] = React.useState(null)
	const {tests} = React.useContext(TestContext)
	const testId = useLocation().pathname.split('/').pop()

	React.useEffect(() => {
		setActiveTest(tests.find((test) => test._id === testId))
	}, [testId])

	return <Questionary {...activeTest} />
}

export default QuestionaryPage
