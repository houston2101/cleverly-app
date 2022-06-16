import React from 'react'
import {useLocation} from 'react-router-dom'
import Questionary from '../sections/Questionary'
import {TestContext} from '../context/TestContext'

const test = {
	title: 'Large Math test',
	id: '123QWER321',
	allowEdit: true,
	questions: [
		{
			text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
			multipleAllow: false,
			answers: [
				{
					isCorrect: false,
					text: 'On the other hand, we denounce with righteous',
					index: 'A'
				}
			]
		}
	]
}

const QuestionaryPage = () => {
	const [activeTest, setActiveTest] = React.useState(test)
	const {getTestById} = React.useContext(TestContext)
	const testId = useLocation().pathname.split('/').pop()
	const [loading, setLoading] = React.useState(true)

	React.useEffect(() => {
		const getData = async () => {
			setLoading(true)
			const data = await getTestById(testId)
			setActiveTest(data)
			document.title = `Cleverly - Тест: ${data.title}`
			setLoading(false)
		}
		getData()
	}, [testId])

	return <Questionary activeTest={activeTest} loading={loading} />
}

export default QuestionaryPage
