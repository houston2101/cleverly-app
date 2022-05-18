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
import QuestionConstructorDeleteStackItem from '../components/QuestionConstructor/QuestionConstructorDeleteStackItem'

const TestSettings = ({
	questions,
	currentQuestion,
	currentQuestionHandler,
	handlerAddQuestion,
	handlerAllowEdit,
	allowEditValue,
	handlerTimeLimit,
	timeLimitValue,
	handlerTime,
	timeValue
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
						<ModalCheckbox
							text='Set time limit'
							value={timeLimitValue}
							handler={handlerTimeLimit}
						/>
					</QuestionaryModalInfo>
					<QuestionaryModalStack>
						{questions.map((el, idx) => (
							<QuestionaryModalItem
								key={idx}
								isTestDone={false}
								isAnswered={false}
								isActive={currentQuestion === idx}
								onClick={() => currentQuestionHandler(idx)}>
								{idx + 1}
								<QuestionConstructorDeleteStackItem />
							</QuestionaryModalItem>
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
