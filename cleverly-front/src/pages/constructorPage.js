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
import {TestContext} from '../context/TestContext'
import Loader from '../sections/Loader'

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
		passingScore: 10,
		questions: [defaultQuestion(0)]
	})

	const [currentQuestionNumber, setCurrentQuestionNumber] = React.useState(0)
	const currentQuestionHandler = (num) => setCurrentQuestionNumber(num)

	//! Global Test Settings

	const handlerSetName = (name) => setTest({...test, title: name})

	const handlerAllowEdit = (allowEdit) =>
		setTest({...test, allowEdit: allowEdit})

	const handlerSetImage = (image) => setTest({...test, image: image})

	const handlerSetCategory = (id) => setTest({...test, category: id})

	const handlerSetPassingScore = (e) =>
		setTest({...test, passingScore: e.target.value})

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

	React.useEffect(() => {
		document.title = 'Cleverly - Конструктор: ' + test.title
	}, [test])

	return (
		<QuestionaryWrapper>
			{(loading && <Loader />) || (
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
					handlerPassingScore={handlerSetPassingScore}
					passingScore={test.passingScore}
				/>
				<Button disabled={loading} onClick={handlerSaveTest}>
					<ButtonText>Save test</ButtonText>
				</Button>
			</QuestionaryAside>
		</QuestionaryWrapper>
	)
}

export default ConstructorPage
