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

const test = {
	title: 'Large Math test',
	id: '123QWER321',
	allowEdit: false,
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
		}
	]
}

const TestResult = () => {
	const [isOpen, setIsOpen] = React.useState(false)
	const handleIsOpen = () => setIsOpen(!isOpen)

	return (
		<QuestionaryWrapper>
			<QuestionaryContent>
				{test.questions.map(({answers, text}) => (
					<QuestionaryContentQuestion>
						<QuestionaryContentQuestionText>
							{text}
						</QuestionaryContentQuestionText>
						<QuestionaryContentQuestionStack>
							{answers.map(({isCorrect, text, index}) => (
								<QuestionaryContentQuestionItem
									isTestDone={true}
									isCorrect={isCorrect}
									key={text}>
									<QuestionaryContentQuestionItemIndex>
										{index}
									</QuestionaryContentQuestionItemIndex>
									<QuestionaryContentQuestionItemText>
										{text}
									</QuestionaryContentQuestionItemText>
								</QuestionaryContentQuestionItem>
							))}
						</QuestionaryContentQuestionStack>
					</QuestionaryContentQuestion>
				))}
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
								<QuestionaryModalText>1</QuestionaryModalText>
								<QuestionaryModalText>
									Time: 1h 40m
								</QuestionaryModalText>
							</QuestionaryModalInfo>
							<QuestionaryModalStack>
								{test.questions.map((el, idx) => (
									<QuestionaryModalItem
										isTestDone={true}
										key={idx}>
										{idx + 1}
									</QuestionaryModalItem>
								))}
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
	)
}

export default TestResult