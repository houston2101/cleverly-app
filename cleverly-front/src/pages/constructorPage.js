import React from 'react'
import QuestionConstructor from '../sections/QuestionConstructor'
import TestInfo from '../sections/TestInfo'
import QuestionaryWrapper from '../components/Questionary/QuestionaryWrapper'
import TestSettings from '../sections/TestSettings'
import QuestionaryAside from '../components/Questionary/QuestionaryAside'
import QuestionaryContent from '../components/Questionary/QuestionaryContent'
import ChooseCategory from '../components/QuestionConstructor/ChooseCategory/ChooseCategory'
import Button from '../components/Button/Button'
import ButtonText from '../components/Button/ButtonText'

const indexes = ['A', 'B', 'C', 'D', 'E', 'F']

const MAXCOUNTOFQUESTIONS = 6

const defaultAnswer = (index) => {
	return {
		index: indexes[index],
		text: '',
		isCorrect: false
	}
}

const defaultQuestion = (number) => {
	return {
		number: number,
		text: '',
		allowMultiSelect: false,
		answers: [defaultAnswer(0)]
	}
}

const ConstructorPage = () => {
	const [test, setTest] = React.useState({
		title: 'Set test name',
		allowEdit: false,
		category: 'undefined',
		timeLimit: false,
		time: null,
		questions: [defaultQuestion(0)]
	})

	const [currentQuestionNumber, setCurrentQuestionNumber] = React.useState(0)
	const currentQuestionHandler = (num) => setCurrentQuestionNumber(num)

	//! Global Test Settings

	const handlerSetName = (name) => setTest({...test, title: name})

	const handlerAllowEdit = (allowEdit) =>
		setTest({...test, allowEdit: allowEdit})

	const handlerTimeLimit = (timeLimit) =>
		setTest({...test, timeLimit: timeLimit})

	const handlerTime = (time) => setTest({...test, time: time})

	//! Global Test Settings

	//! Questions settings

	const handlerAddQuestion = (num) =>
		setTest({
			...test,
			questions: [...test.questions, defaultQuestion(num)]
		})

	const handlerUpdateQuestion = (updatedQuestion) =>
		setTest({
			...test,
			questions: [
				...test.questions.filter(
					({number}) => number !== updatedQuestion.number
				),
				updatedQuestion
			].sort((a, b) => a.number - b.number)
		})

	const changeQuestionText = (e, currentQuestion) =>
		handlerUpdateQuestion({
			...currentQuestion,
			text: e.target.value
		})

	const changeQuestionMultiSelect = (currentQuestion, allowMultiSelect) =>
		handlerUpdateQuestion({
			...currentQuestion,
			allowMultiSelect: allowMultiSelect
		})

	const addNewAnswer = (currentQuestion) =>
		currentQuestion.answers.length < MAXCOUNTOFQUESTIONS
			? handlerUpdateQuestion({
					...currentQuestion,
					answers: [
						...currentQuestion.answers,
						defaultAnswer(currentQuestion.answers.length)
					]
			  })
			: null

	const changeAnswerText = (e, index, currentQuestion) => {
		handlerUpdateQuestion({
			...currentQuestion,
			answers: [
				...currentQuestion.answers.filter(
					(answer) => answer.index !== index
				),
				{
					...currentQuestion.answers.find(
						(answer) => answer.index === index
					),
					text: e.target.value
				}
			].sort((a, b) => {
				if (a.index < b.index) return -1
				if (a.index > b.index) return 1
				return 0
			})
		})
	}

	const changeAnswerStatus = (index, currentQuestion, isCorrect) => {
		handlerUpdateQuestion({
			...currentQuestion,
			answers: [
				...currentQuestion.answers.filter(
					(answer) => answer.index !== index
				),
				{
					...currentQuestion.answers.find(
						(answer) => answer.index === index
					),
					isCorrect: !isCorrect
				}
			].sort((a, b) => {
				if (a.index < b.index) return -1
				if (a.index > b.index) return 1
				return 0
			})
		})
	}

	//! Questions settings

	//* For test
	React.useEffect(() => {
		console.log(test)
	}, [test])
	//* For test

	return (
		<QuestionaryWrapper>
			<QuestionaryContent>
				<QuestionConstructor
					addNewAnswer={addNewAnswer}
					currentQuestionNum={currentQuestionNumber}
					currentQuestion={test.questions[currentQuestionNumber]}
					changeQuestionText={changeQuestionText}
					changeAnswerText={changeAnswerText}
					changeAnswerStatus={changeAnswerStatus}
					changeQuestionMultiSelect={changeQuestionMultiSelect}
				/>
			</QuestionaryContent>
			<QuestionaryAside>
				<TestInfo title={test.title} setName={handlerSetName} />
				<ChooseCategory />
				<TestSettings
					questions={test.questions}
					currentQuestion={currentQuestionNumber}
					currentQuestionHandler={currentQuestionHandler}
					handlerAddQuestion={handlerAddQuestion}
					handlerAllowEdit={handlerAllowEdit}
					allowEditValue={test.allowEdit}
					handlerTimeLimit={handlerTimeLimit}
					timeLimitValue={test.timeLimit}
					handlerTime={handlerTime}
					timeValue={test.time}
				/>
				<Button>
					<ButtonText>Save test</ButtonText>
				</Button>
			</QuestionaryAside>
		</QuestionaryWrapper>
	)
}

export default ConstructorPage
