import React from 'react'
import Button from '../components/Button/Button'
import ButtonText from '../components/Button/ButtonText'
import QuestionaryWrapper from '../components/Questionary/QuestionaryWrapper'
import QuestionaryContent from '../components/Questionary/QuestionaryContent'
import QuestionaryContentQuestion from '../components/Questionary/QuestionaryContentQuestion'
import QuestionaryContentQuestionText from '../components/Questionary/QuestionaryContentQuestionText'
import QuestionaryContentQuestionStack from '../components/Questionary/QuestionaryContentQuestionStack'
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
import QuestionaryModalButtonItem from '../components/Questionary/QuestionaryModalButtonItem'
import SendButtonWrapper from '../components/Questionary/SendButtonWrapper'
import ButtonArrow from '../components/Button/ButtonArrow'
import {ResultContext} from '../context/ResultContext'
import {TestContext} from '../context/TestContext'
import {useLocation} from 'react-router-dom'
import Loader from './Loader'

const TestResult = () => {
	const [isOpen, setIsOpen] = React.useState(false)
	const handleIsOpen = () => setIsOpen(!isOpen)
	const resultId = useLocation().pathname.split('/').pop()

	const {results} = React.useContext(ResultContext)
	const {tests} = React.useContext(TestContext)

	const [currentTest, setCurrentTest] = React.useState(null)
	const [currentResult, setCurrentResult] = React.useState(null)

	React.useEffect(() => {
		if (currentResult)
			setCurrentTest(
				tests.find((test) => test._id === currentResult.testId)
			)
	}, [currentResult])

	React.useEffect(() => {
		if (results) setCurrentResult(results.find(({_id}) => _id === resultId))
	}, [results])

	return currentTest ? (
		<QuestionaryWrapper>
			<QuestionaryContent>
				{currentTest.questions.map(({answers, number, text}) => {
					return (
						<QuestionaryContentQuestion key={number}>
							<QuestionaryContentQuestionText>
								{text}
							</QuestionaryContentQuestionText>
							<QuestionaryContentQuestionStack>
								{answers.map(({isCorrect, text, index}) => {
									const thisAnswer = currentResult.questions[
										number
									].answers.find(
										({index: answerIdx}) =>
											answerIdx === index
									)
									console.log(thisAnswer)
									return (
										<QuestionaryContentQuestionItem
											isTestDone={true}
											notSelected={!thisAnswer}
											isCorrect={
												thisAnswer
													? thisAnswer.isCorrect
													: isCorrect
											}
											key={text}>
											<QuestionaryContentQuestionItemIndex>
												{index}
											</QuestionaryContentQuestionItemIndex>
											<QuestionaryContentQuestionItemText>
												{text}
											</QuestionaryContentQuestionItemText>
										</QuestionaryContentQuestionItem>
									)
								})}
							</QuestionaryContentQuestionStack>
						</QuestionaryContentQuestion>
					)
				})}
			</QuestionaryContent>

			<QuestionaryAside>
				<QuestionaryTitle>{currentTest.title}</QuestionaryTitle>
				<QuestionaryModal isOpen={isOpen}>
					<QuestionaryModalButton onClick={handleIsOpen}>
						<QuestionaryModalButtonItem />
					</QuestionaryModalButton>
					<QuestionaryModalContent>
						<QuestionaryModalWrapper>
							<QuestionaryModalInfo>
								<QuestionaryModalText>
									{currentResult.isPassed
										? 'Тест пройден'
										: 'Тест не пройден'}
								</QuestionaryModalText>
								<QuestionaryModalText>
									Кол-во правильных ответов:{' '}
									{currentResult.countOfCorrectAnswers}/
									{currentTest.questions.length}
								</QuestionaryModalText>
							</QuestionaryModalInfo>
							<QuestionaryModalStack>
								{currentTest.questions.map(
									({_id, answers, number}, idx) => {
										const activeAnswer =
											currentResult.questions[number]

										const countOfSelectedIncorrectAnswers =
											activeAnswer.answers.filter(
												({isCorrect}) =>
													isCorrect === false
											).length

										if (
											activeAnswer.answers.length === 0 &&
											countOfSelectedIncorrectAnswers !==
												0
										)
											return 0

										const countOfChosenCorrectedAnswers =
											activeAnswer.answers.reduce(
												(acc, answer) =>
													answer.isCorrect
														? acc + 1
														: acc,
												0
											)

										const countOfCorrectAnswers =
											answers.reduce(
												(acc, answer) =>
													answer.isCorrect
														? acc + 1
														: acc,
												0
											)

										return (
											<QuestionaryModalItem
												isTestDone={true}
												isCorrect={
													countOfChosenCorrectedAnswers ===
													countOfCorrectAnswers
												}
												key={idx}>
												{idx + 1}
											</QuestionaryModalItem>
										)
									}
								)}
							</QuestionaryModalStack>
						</QuestionaryModalWrapper>
					</QuestionaryModalContent>
				</QuestionaryModal>
				<SendButtonWrapper>
					<Button>
						<ButtonText>Back to all results</ButtonText>
						<ButtonArrow />
					</Button>
				</SendButtonWrapper>
			</QuestionaryAside>
		</QuestionaryWrapper>
	) : (
		<Loader />
	)
}

export default TestResult
