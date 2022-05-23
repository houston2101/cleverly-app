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
				},
				{
					isCorrect: false,
					text: 'indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment',
					index: 'B'
				},
				{
					isCorrect: false,
					text: 'so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue;',
					index: 'C'
				},
				{
					isCorrect: true,
					text: 'The wise man therefore always holds in these matters to this principle',
					index: 'D'
				}
			]
		},
		{
			text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
			multipleAllow: false,
			answers: [
				{
					isCorrect: false,
					text: 'On the other hand, we denounce with righteous',
					index: 'A'
				},
				{
					isCorrect: false,
					text: 'indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment',
					index: 'B'
				},
				{
					isCorrect: false,
					text: 'so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue;',
					index: 'C'
				},
				{
					isCorrect: true,
					text: 'The wise man therefore always holds in these matters to this principle',
					index: 'D'
				}
			]
		},
		{
			text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
			multipleAllow: false,
			answers: [
				{
					isCorrect: false,
					text: 'On the other hand, we denounce with righteous',
					index: 'A'
				},
				{
					isCorrect: false,
					text: 'indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment',
					index: 'B'
				},
				{
					isCorrect: false,
					text: 'so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue;',
					index: 'C'
				},
				{
					isCorrect: true,
					text: 'The wise man therefore always holds in these matters to this principle',
					index: 'D'
				}
			]
		},
		{
			text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
			multipleAllow: false,
			answers: [
				{
					isCorrect: false,
					text: 'On the other hand, we denounce with righteous',
					index: 'A'
				},
				{
					isCorrect: false,
					text: 'indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment',
					index: 'B'
				},
				{
					isCorrect: false,
					text: 'so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue;',
					index: 'C'
				},
				{
					isCorrect: true,
					text: 'The wise man therefore always holds in these matters to this principle',
					index: 'D'
				}
			]
		},
		{
			text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
			multipleAllow: true,
			answers: [
				{
					isCorrect: false,
					text: 'On the other hand, we denounce with righteous',
					index: 'A'
				},
				{
					isCorrect: false,
					text: 'indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment',
					index: 'B'
				},
				{
					isCorrect: false,
					text: 'so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue;',
					index: 'C'
				},
				{
					isCorrect: true,
					text: 'The wise man therefore always holds in these matters to this principle',
					index: 'D'
				}
			]
		}
	]
}

const Questionary = () => {
	const [userResult, setUserResult] = React.useState({
		testId: test.id,
		userId: 'someUserId',
		countOfCorrectAnswers: null,
		answers: []
	})
	const [testDone, setTestDone] = React.useState(false)
	const [activeQuestion, setActiveQuestion] = React.useState(0)
	const [answeredQuestions, setAnsweredQuestions] = React.useState(
		new Array(test.questions.length)
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
		console.log('active question', activeQuestion)
	}, [activeQuestion])

	React.useEffect(() => {
		console.log(answeredQuestions)
	}, [answeredQuestions])

	React.useEffect(() => {
		setUserResult({
			...userResult,
			countOfCorrectAnswers: test.questions.map(
				({number, multipleAllow, answers}) => {
					userResult.answers.find(({question}) => question === number)
				}
			),
			answers: answeredQuestions
		})
	}, [])

	const [isOpen, setIsOpen] = React.useState(false)
	const handleIsOpen = () => setIsOpen(!isOpen)

	return (
		<QuestionaryWrapper>
			{testDone ? (
				<div>Processing</div>
			) : (
				<>
					<QuestionaryContent>
						<QuestionaryContentQuestion>
							<QuestionaryContentQuestionText>
								{test.questions[activeQuestion].text}
							</QuestionaryContentQuestionText>
							<QuestionaryContentQuestionStack>
								<QuestionaryContentQuestionMark>
									{test.questions[activeQuestion]
										.multipleAllow
										? 'select few answers'
										: 'select one answer'}
								</QuestionaryContentQuestionMark>
								{test.questions[activeQuestion].answers.map(
									({isCorrect, text, index}) => (
										<QuestionaryContentQuestionItem
											key={text}
											isSelected={answeredQuestions[
												activeQuestion
											]?.answers?.find(
												(answer) =>
													answer?.index === index
											)}
											onClick={() =>
												handleSelectAnswer(
													index,
													isCorrect,
													test.questions[
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
									)
								)}
							</QuestionaryContentQuestionStack>
							<QuestionaryContentQuestionBottom>
								<Button
									dir='left'
									dNone={true}
									onClick={() =>
										handleSelectQuestion(activeQuestion - 1)
									}
									disabled={
										activeQuestion === 0 || !test.allowEdit
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
										test.questions.length - 1
									}>
									<ButtonText>Next question</ButtonText>
									<ButtonArrow />
								</Button>
							</QuestionaryContentQuestionBottom>
						</QuestionaryContentQuestion>
					</QuestionaryContent>

					<QuestionaryAside>
						<QuestionaryTitle>{test.title}</QuestionaryTitle>
						<QuestionaryModal isOpen={isOpen}>
							<QuestionaryModalButton onClick={handleIsOpen}>
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
												isAnswered={answeredQuestions?.find(
													(el) => el?.question === idx
												)}
												isAllowEdit={test.allowEdit}
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
