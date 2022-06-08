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
import {useHttp} from '../hooks/http.hook'
import {TestContext} from '../context/TestContext'

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
		category: null,
		image: null,
		timeLimit: false,
		time: null,
		passingScore: 10,
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

	const handlerSetImage = (image) => setTest({...test, image: image})

	const handlerSetCategory = (id) => setTest({...test, category: id})

	//! Global Test Settings

	//! Questions settings

	const handlerAddQuestion = (num) =>
		setTest({
			...test,
			questions: [...test.questions, defaultQuestion(num)]
		})

	const handlerRemoveQuestion = (number) => {
		setTest({
			...test,
			questions: [
				...test.questions
					.filter((question) => question.number !== number)
					.map((question, idx) => {
						return {
							...question,
							number: idx
						}
					})
			]
		})
	}

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

	const removeAnswer = (currentQuestion, index) =>
		handlerUpdateQuestion({
			...currentQuestion,
			answers: [
				...currentQuestion.answers
					.filter((answer) => answer.index !== index)
					.map((answer, idx) => {
						return {
							...answer,
							index: indexes[idx]
						}
					})
			]
		})

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

	const {loading, addTest} = React.useContext(TestContext)

	const handlerSaveTest = () => {
		addTest(test)
	}

	return (
		<QuestionaryWrapper>
			{(loading && <div> Loading </div>) || (
				<QuestionaryContent>
					<QuestionConstructor
						addNewAnswer={addNewAnswer}
						removeAnswer={removeAnswer}
						currentQuestionNum={currentQuestionNumber}
						currentQuestion={test.questions[currentQuestionNumber]}
						changeQuestionText={changeQuestionText}
						changeAnswerText={changeAnswerText}
						changeAnswerStatus={changeAnswerStatus}
						changeQuestionMultiSelect={changeQuestionMultiSelect}
					/>
				</QuestionaryContent>
			)}
			<QuestionaryAside>
				<TestInfo
					title={test.title}
					imageData={test.image}
					setImage={handlerSetImage}
					setName={handlerSetName}
				/>
				<ChooseCategory
					category={test.category}
					handlerSetCategory={handlerSetCategory}
				/>
				<TestSettings
					questions={test.questions}
					currentQuestion={currentQuestionNumber}
					currentQuestionHandler={currentQuestionHandler}
					handlerAddQuestion={handlerAddQuestion}
					handlerRemoveQuestion={handlerRemoveQuestion}
					handlerAllowEdit={handlerAllowEdit}
					allowEditValue={test.allowEdit}
					handlerTimeLimit={handlerTimeLimit}
					timeLimitValue={test.timeLimit}
					handlerTime={handlerTime}
					timeValue={test.time}
				/>
				<Button disabled={loading} onClick={handlerSaveTest}>
					<ButtonText>Save test</ButtonText>
				</Button>
			</QuestionaryAside>
		</QuestionaryWrapper>
	)
}

export default ConstructorPage
