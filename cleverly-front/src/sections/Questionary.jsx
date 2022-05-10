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

const test = {
	title: 'Large Math test',
	id: '123QWER321',
	allowEdit: true,
	questions: [
		{
			text: 'Fuck you',
			multipleAllow: false,
			answers: [
				{
					isCorrect: false,
					text: 'Not you',
					index: 'A'
				},
				{
					isCorrect: false,
					text: 'Fuck you',
					index: 'B'
				},
				{
					isCorrect: false,
					text: 'Yep me',
					index: 'C'
				},
				{
					isCorrect: true,
					text: 'Nope',
					index: 'D'
				}
			]
		},
		{
			text: 'Когда тебя ебали, что на жопе написали?',
			multipleAllow: true,
			answers: [
				{
					isCorrect: false,
					text: 'Опа, твоя мать прячет зерно',
					index: 'A'
				},
				{
					isCorrect: true,
					text: 'Честно говоря, проктолог из вас так себе',
					index: 'B'
				},
				{
					isCorrect: false,
					text: 'Тебе виднее, ты же писал',
					index: 'C'
				},
				{
					isCorrect: true,
					text: '*уйти в уголок и отмалчиваться как очередняра*',
					index: 'D'
				}
			]
		},
		{
			text: 'Кто виноват во всех сметрных грехах?',
			multipleAllow: false,
			answers: [
				{
					isCorrect: true,
					text: 'Александр григорьевич Лукакенко',
					index: 'A'
				},
				{
					isCorrect: false,
					text: 'Адольф Гитлер',
					index: 'B'
				},
				{
					isCorrect: false,
					text: 'Волан-де-Морт',
					index: 'C'
				},
				{
					isCorrect: false,
					text: 'Автор пидр, дизлайк, отписка',
					index: 'D'
				}
			]
		},
		{
			text: 'Зачем накуривать осу?',
			multipleAllow: true,
			answers: [
				{
					isCorrect: true,
					text: 'Шоб не выёбывалась, гнида такая',
					index: 'A'
				},
				{
					isCorrect: true,
					text: 'Прост)0)))',
					index: 'B'
				},
				{
					isCorrect: false,
					text: 'Слыш, гнида, я тебя ща сама накурю (С) оса',
					index: 'C'
				},
				{
					isCorrect: true,
					text: 'Бжжжжжжжжж :D',
					index: 'D'
				}
			]
		},
		{
			text: 'Владимир Путин...',
			multipleAllow: false,
			answers: [
				{
					isCorrect: false,
					text: 'МОЛОДЕЦ',
					index: 'A'
				},
				{
					isCorrect: false,
					text: 'ПОЛИТИК, ЛИДЕР',
					index: 'B'
				},
				{
					isCorrect: false,
					text: 'И БОРЕЦ',
					index: 'C'
				},
				{
					isCorrect: true,
					text: 'ХУЙЛО, ЛАЛАЛАЛАЛАЛАЛА',
					index: 'D'
				}
			]
		}
	]
}

const Questionary = () => {
	const [userResult, setUserResult] = React.useState({
		testId: '123QWER321',
		userId: 'someUserId',
		answers: []
	})
	const [activeQuestion, setActiveQuestion] = React.useState(0)
	const [selectedAnswers, setSelectedAnswers] = React.useState([])

	const handleSetUserResult = () => {
		setSelectedAnswers(
			userResult?.answers?.find((el) => el.question === activeQuestion)
				?.selectedAnswers || []
		)
		setUserResult({
			...userResult,
			answers: [
				...userResult.answers.filter(
					(el) => el.question !== activeQuestion
				),
				{selectedAnswers, question: activeQuestion}
			]
		})
	}

	const handleSelectQuestion = (question) => {
		handleSetUserResult()
		setActiveQuestion(question)
		return setSelectedAnswers(
			userResult?.answers?.find((el) => el.question === activeQuestion)
				?.selectedAnswers || []
		)
	}

	const handleSetSelectedAnswers = (answerId, isCorrect, multipleAllow) =>
		selectedAnswers.find((el) => el.id === answerId)
			? setSelectedAnswers(
					selectedAnswers.filter((el) => el.id !== answerId)
			  )
			: setSelectedAnswers(
					multipleAllow
						? [...selectedAnswers, {id: answerId, isCorrect}]
						: [{id: answerId, isCorrect}]
			  )

	const handleFinishTest = () => {
		handleSetUserResult()
		console.log(userResult)
	}

	React.useEffect(() => {
		console.log(userResult)
	}, [activeQuestion])

	React.useEffect(() => {
		console.log(selectedAnswers)
	}, [selectedAnswers])
	return (
		<QuestionaryWrapper>
			<QuestionaryContent>
				<QuestionaryContentQuestion>
					<QuestionaryContentQuestionText>
						{test.questions[activeQuestion].text}
					</QuestionaryContentQuestionText>
					<QuestionaryContentQuestionStack>
						<QuestionaryContentQuestionMark>
							{test.questions[activeQuestion].multipleAllow
								? 'select few answers'
								: 'select one answer'}
						</QuestionaryContentQuestionMark>
						{test.questions[activeQuestion].answers.map(
							({isCorrect, text, index}) => (
								<QuestionaryContentQuestionItem
									key={text}
									onClick={() =>
										handleSetSelectedAnswers(
											index,
											isCorrect,
											test.questions[activeQuestion]
												.multipleAllow
										)
									}
									isSelected={selectedAnswers.find(
										(el) => el.id === index
									)}>
									<QuestionaryContentQuestionItemIndex>
										{index}
									</QuestionaryContentQuestionItemIndex>
									<QuestionaryContentQuestionItemText>
										{text}
									</QuestionaryContentQuestionItemText>
								</QuestionaryContentQuestionItem>
							)
						)}
					</QuestionaryContentQuestionStack>
					<QuestionaryContentQuestionBottom>
						<Button
							onClick={() =>
								handleSelectQuestion(activeQuestion - 1)
							}
							disabled={activeQuestion === 0 || !test.allowEdit}>
							<ButtonText>Previous question</ButtonText>
						</Button>
						<Button
							onClick={() =>
								handleSelectQuestion(activeQuestion + 1)
							}
							disabled={
								activeQuestion === test.questions.length - 1
							}>
							<ButtonText>Next question</ButtonText>
						</Button>
					</QuestionaryContentQuestionBottom>
				</QuestionaryContentQuestion>
			</QuestionaryContent>

			<QuestionaryAside>
				<QuestionaryTitle>Test Title</QuestionaryTitle>
				<QuestionaryModal>
					<QuestionaryModalButton>
						<QuestionaryModalButtonItem />
					</QuestionaryModalButton>
					<QuestionaryModalContent>
						<QuestionaryModalWrapper>
							<QuestionaryModalInfo>
								<QuestionaryModalText>
									Question: {activeQuestion + 1}/
									{test.questions.length}
								</QuestionaryModalText>
								<QuestionaryModalText>
									Time: 1h 40m
								</QuestionaryModalText>
							</QuestionaryModalInfo>
							<QuestionaryModalStack>
								{test.questions.map((el, idx) => (
									<QuestionaryModalItem
										key={idx}
										isTestDone={false}
										isAnswered={userResult?.answers?.find(
											(el) => el.question === idx
										)}
										isAllowEdit={test.allowEdit}
										isActive={idx === activeQuestion}
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
				<Button onClick={handleFinishTest}>
					<ButtonText>Finish and send results</ButtonText>
				</Button>
			</QuestionaryAside>
		</QuestionaryWrapper>
	)
}

export default Questionary
