import React from 'react'
import Button from '../components/Button/Button'
import ButtonText from '../components/Button/ButtonText'
import QuestionaryWrapper from '../components/Questionary/QuestionaryWrapper'
import QuestionaryContent from '../components/Questionary/QuestionaryContent'
import QuestionaryContentQuestion from '../components/Questionary/QuestionaryContentQuestion'
import QuestionaryContentQuestionText from '../components/Questionary/QuestionaryContentQuestionText'
import QuestionaryContentQuestionStack from '../components/Questionary/QuestionaryContentQuestionStack'
import QuestionaryContentQuestionMark from '../components/Questionary/QuestionaryContentQuestionMark'
import QuestionaryContentQuestionItem from '../components/Questionary/QuestionaryContentQuestionItem'
import QuestionaryContentQuestionItemIndex from '../components/Questionary/QuestionaryContentQuestionItemIndex'
import QuestionaryContentQuestionItemText from '../components/Questionary/QuestionaryContentQuestionItemText'
import QuestionaryModal from '../components/Questionary/QuestionaryModal'
import QuestionaryModalButton from '../components/Questionary/QuestionaryModalButton'
import QuestionaryModalContent from '../components/Questionary/QuestionaryModalContent'
import QuestionaryAside from '../components/Questionary/QuestionaryAside'
import QuestionaryTitle from '../components/Questionary/QuestionaryTitle'
import QuestionaryModalInfo from '../components/Questionary/QuestionaryModalInfo'
import QuestionaryModalItem from '../components/Questionary/QuestionaryModalItem'
import QuestionaryModalText from '../components/Questionary/QuestionaryModalText'
import QuestionaryModalStack from '../components/Questionary/QuestionaryModalStack'
import QuestionaryModalWrapper from '../components/Questionary/QuestionaryModalWrapper'
import QuestionaryContentQuestionBottom from '../components/Questionary/QuestionaryContentQuestionBottom'
import QuestionaryModalButtonItem from '../components/Questionary/QuestionaryModalButtonItem'
import SendButtonWrapper from '../components/Questionary/SendButtonWrapper'
import ButtonArrow from '../components/Button/ButtonArrow'
import {AuthContext} from '../context/AuthContext'
import {ResultContext} from '../context/ResultContext'
import Loader from './Loader'
import {useNavigate} from 'react-router-dom'

const Questionary = ({activeTest, loading}) => {
	const {userId} = React.useContext(AuthContext)
	const [userResult, setUserResult] = React.useState({
		testId: activeTest.id,
		userId: userId,
		countOfCorrectAnswers: null,
		questions: []
	})

	const {addResult} = React.useContext(ResultContext)
	const navigate = useNavigate()

	const [testDone, setTestDone] = React.useState(false)
	const [activeQuestion, setActiveQuestion] = React.useState(0)
	const [answeredQuestions, setAnsweredQuestions] = React.useState(
		new Array(activeTest.questions.length)
	)

	const handleSelectAnswer = (index, isCorrect, multipleAllow) => {
		const tempQuestions = [...answeredQuestions]
		const tempAnswer = answeredQuestions[activeQuestion]

		tempQuestions.splice(
			activeQuestion,
			1,
			(tempAnswer &&
				multipleAllow && {
					...tempAnswer,
					answers: tempAnswer.answers.find(
						(answer) => answer.index === index
					)
						? [
								...tempAnswer.answers.filter(
									(answer) => answer.index !== index
								)
						  ]
						: [
								...tempAnswer.answers,
								{
									index,
									isCorrect
								}
						  ]
				}) || {
				number: activeQuestion,
				answers: [
					{
						index,
						isCorrect
					}
				]
			}
		)
		setAnsweredQuestions(tempQuestions)
	}

	// Don't touch

	const handleSelectQuestion = (question) => {
		setActiveQuestion(question)
	}

	const handleFinishTest = () => {
		setTestDone(true)
	}

	React.useEffect(() => {
		setUserResult({
			...userResult,
			testId: activeTest._id
		})
		setAnsweredQuestions(new Array(activeTest.questions.length))
	}, [activeTest])

	React.useEffect(() => {
		const countingResult = () => {
			const countOfCorrectAnswers = activeTest.questions
				.map(({number, multipleAllow, answers}) => {
					const activeAnswer = answeredQuestions[number]

					const countOfSelectedIncorrectAnswers =
						activeAnswer.answers.filter(
							({isCorrect}) => isCorrect === false
						).length

					if (
						activeAnswer.answers.length === 0 &&
						countOfSelectedIncorrectAnswers !== 0
					)
						return 0

					const countOfChosenCorrectedAnswers =
						activeAnswer.answers.reduce(
							(acc, answer) => (answer.isCorrect ? acc + 1 : acc),
							0
						)

					const countOfCorrectAnswers = answers.reduce(
						(acc, answer) => (answer.isCorrect ? acc + 1 : acc),
						0
					)

					if (countOfChosenCorrectedAnswers === countOfCorrectAnswers)
						return 1
					else return 0
				})
				.reduce((acc, answer) => acc + answer, 0)

			console.log(countOfCorrectAnswers)

			return {
				countOfCorrectAnswers: countOfCorrectAnswers,
				isPassed: countOfCorrectAnswers >= activeTest.passingScore
			}
		}

		if (testDone) {
			setUserResult({
				...userResult,
				...countingResult(),
				questions: answeredQuestions
			})
		}
	}, [testDone])

	React.useEffect(() => {
		if (testDone) {
			addResult(userResult)
			navigate('/results/')
		}
	}, [userResult])

	const [isOpen, setIsOpen] = React.useState(false)
	const handleIsOpen = () => setIsOpen(!isOpen)

	return loading ? (
		<Loader />
	) : (
		<QuestionaryWrapper>
			{testDone ? (
				<Loader />
			) : (
				<>
					<QuestionaryContent>
						<QuestionaryContentQuestion>
							<QuestionaryContentQuestionText>
								{activeTest.questions[activeQuestion].text}
							</QuestionaryContentQuestionText>
							<QuestionaryContentQuestionStack>
								<QuestionaryContentQuestionMark>
									{activeTest.questions[activeQuestion]
										.multipleAllow
										? 'select few answers'
										: 'select one answer'}
								</QuestionaryContentQuestionMark>
								{activeTest.questions[
									activeQuestion
								].answers.map(({isCorrect, text, index}) => (
									<QuestionaryContentQuestionItem
										key={text}
										isSelected={answeredQuestions[
											activeQuestion
										]?.answers?.find(
											(answer) => answer?.index === index
										)}
										onClick={() =>
											handleSelectAnswer(
												index,
												isCorrect,
												activeTest.questions[
													activeQuestion
												].multipleAllow
											)
										}>
										<QuestionaryContentQuestionItemIndex>
											{index}
										</QuestionaryContentQuestionItemIndex>
										<QuestionaryContentQuestionItemText>
											{text}
										</QuestionaryContentQuestionItemText>
									</QuestionaryContentQuestionItem>
								))}
							</QuestionaryContentQuestionStack>
							<QuestionaryContentQuestionBottom>
								<Button
									dir='left'
									dNone={true}
									onClick={() =>
										handleSelectQuestion(activeQuestion - 1)
									}
									disabled={
										activeQuestion === 0 ||
										!activeTest.allowEdit
									}>
									<ButtonArrow />
									<ButtonText>Prev question</ButtonText>
								</Button>
								<Button
									dNone={true}
									onClick={() =>
										handleSelectQuestion(activeQuestion + 1)
									}
									disabled={
										activeQuestion ===
										activeTest.questions.length - 1
									}>
									<ButtonText>Next question</ButtonText>
									<ButtonArrow />
								</Button>
							</QuestionaryContentQuestionBottom>
						</QuestionaryContentQuestion>
					</QuestionaryContent>

					<QuestionaryAside>
						<QuestionaryTitle>{activeTest.title}</QuestionaryTitle>
						<QuestionaryModal isOpen={isOpen}>
							<QuestionaryModalButton onClick={handleIsOpen}>
								<QuestionaryModalButtonItem />
							</QuestionaryModalButton>
							<QuestionaryModalContent>
								<QuestionaryModalWrapper>
									<QuestionaryModalInfo>
										<QuestionaryModalText>
											Question: {activeQuestion + 1}/
											{activeTest.questions.length}
										</QuestionaryModalText>
									</QuestionaryModalInfo>
									<QuestionaryModalStack>
										{activeTest.questions.map((el, idx) => (
											<QuestionaryModalItem
												key={idx}
												isTestDone={false}
												isAnswered={answeredQuestions?.find(
													(el) =>
														el?.number === idx &&
														!(
															idx ===
															activeQuestion
														)
												)}
												isAllowEdit={
													activeTest.allowEdit
												}
												isActive={
													idx === activeQuestion
												}
												onClick={() =>
													handleSelectQuestion(idx)
												}>
												{idx + 1}
											</QuestionaryModalItem>
										))}
									</QuestionaryModalStack>
								</QuestionaryModalWrapper>
							</QuestionaryModalContent>
						</QuestionaryModal>
						<SendButtonWrapper>
							<Button onClick={handleFinishTest}>
								<ButtonText>Finish and send results</ButtonText>
								<ButtonArrow />
							</Button>
						</SendButtonWrapper>
					</QuestionaryAside>
				</>
			)}
		</QuestionaryWrapper>
	)
}

export default Questionary
