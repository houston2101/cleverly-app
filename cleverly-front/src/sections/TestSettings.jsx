import React from 'react'
import QuestionaryModal from '../components/Questionary/QuestionaryModal'
import QuestionaryModalButton from '../components/Questionary/QuestionaryModalButton'
import QuestionaryModalButtonItem from '../components/Questionary/QuestionaryModalButtonItem'
import QuestionaryModalContent from '../components/Questionary/QuestionaryModalContent'
import QuestionaryModalWrapper from '../components/Questionary/QuestionaryModalWrapper'
import QuestionaryModalInfo from '../components/Questionary/QuestionaryModalInfo'
import QuestionaryModalStack from '../components/Questionary/QuestionaryModalStack'
import QuestionaryModalItem from '../components/Questionary/QuestionaryModalItem'
import ModalCheckbox from '../components/ModalCheckbox/ModalCheckbox'
import QuestionaryModalItemWrapper from '../components/Questionary/QuestionaryModalItemWrapper'
import QuestionConstructorDeleteStackItem from '../components/QuestionConstructor/QuestionConstructorDeleteStackItem'
import Input from '../components/Input'

const TestSettings = ({
	questions,
	currentQuestion,
	currentQuestionHandler,
	handlerAddQuestion,
	handlerRemoveQuestion,
	handlerAllowEdit,
	allowEditValue,
	handlerPassingScore,
	passingScoreValue
}) => {
	const [isOpen, setIsOpen] = React.useState(false)
	const handleIsOpen = () => setIsOpen(!isOpen)

	return (
		<QuestionaryModal isOpen={isOpen}>
			<QuestionaryModalButton onClick={handleIsOpen}>
				<QuestionaryModalButtonItem />
			</QuestionaryModalButton>
			<QuestionaryModalContent>
				<QuestionaryModalWrapper>
					<QuestionaryModalInfo>
						<ModalCheckbox
							text='Allow edit questions'
							value={allowEditValue}
							handler={handlerAllowEdit}
						/>
						<Input
							type='number'
							placeholder='passing score'
							value={passingScoreValue}
							onChange={handlerPassingScore}
						/>
					</QuestionaryModalInfo>
					<QuestionaryModalStack>
						{questions.map((el, idx) => (
							<QuestionaryModalItemWrapper key={idx}>
								<QuestionaryModalItem
									isTestDone={false}
									isAnswered={false}
									isActive={currentQuestion === el.number}
									onClick={() =>
										currentQuestionHandler(el.number)
									}>
									{el.number + 1}
								</QuestionaryModalItem>
								{questions.length > 1 && (
									<QuestionConstructorDeleteStackItem
										onClick={(e) => {
											handlerRemoveQuestion(el.number)
											e.stopPropagation()
										}}
									/>
								)}
							</QuestionaryModalItemWrapper>
						))}
						<QuestionaryModalItem
							isTestDone={false}
							isAnswered={false}
							onClick={() =>
								handlerAddQuestion(questions.length)
							}>
							+
						</QuestionaryModalItem>
					</QuestionaryModalStack>
				</QuestionaryModalWrapper>
			</QuestionaryModalContent>
		</QuestionaryModal>
	)
}

export default TestSettings
