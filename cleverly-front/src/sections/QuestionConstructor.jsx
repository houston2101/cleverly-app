import React from 'react'
import QuestionaryContentQuestion from '../components/Questionary/QuestionaryContentQuestion'
import QuestionaryContentQuestionStack from '../components/Questionary/QuestionaryContentQuestionStack'
import QuestionaryContentQuestionMark from '../components/Questionary/QuestionaryContentQuestionMark'
import QuestionaryContentQuestionItem from '../components/Questionary/QuestionaryContentQuestionItem'
import QuestionaryContentQuestionItemIndex from '../components/Questionary/QuestionaryContentQuestionItemIndex'
import QuestionText from '../components/QuestionConstructor/QuestionText'
import QuestionTextWrapper from '../components/QuestionConstructor/QuestionTextWrapper'
import QuestionaryContentQuestionItemText from '../components/Questionary/QuestionaryContentQuestionItemText'
import EditUserNameIcon from '../components/EditableTitle/EditTitleIcon'
import AddAnswer from '../components/Icons/AddAnswer'
import QuestionConstructorDeleteQuestion from '../components/QuestionConstructor/QuestionConstructorDeleteQuestion'
import ModalCheckbox from '../components/ModalCheckbox/ModalCheckbox'

const MAXCOUNTOFQUESTIONS = 6

const QuestionConstructor = ({
	addNewAnswer,
	removeAnswer,
	currentQuestionNum,
	currentQuestion,
	changeQuestionText,
	changeAnswerText,
	changeAnswerStatus,
	changeQuestionMultiSelect
}) => {
	return (
		<QuestionaryContentQuestion>
			<QuestionTextWrapper>
				{currentQuestionNum + 1 + '.'}
				<QuestionText
					placeholder='Enter your question'
					value={currentQuestion.text}
					onChange={(e) => changeQuestionText(e, currentQuestion)}
				/>
				<EditUserNameIcon />
			</QuestionTextWrapper>
			<QuestionaryContentQuestionStack>
				<ModalCheckbox
					text='allow multi-select answers'
					handler={(isCorrect) =>
						changeQuestionMultiSelect(currentQuestion, isCorrect)
					}
					value={currentQuestion.allowMultiSelect}
				/>
				<QuestionaryContentQuestionMark />
				{currentQuestion.answers.map(({index, text, isCorrect}) => (
					<QuestionaryContentQuestionItem key={index}>
						<QuestionaryContentQuestionItemIndex>
							{index}
						</QuestionaryContentQuestionItemIndex>
						<QuestionaryContentQuestionItemText
							as='input'
							value={text}
							placeholder='Enter your answer'
							onChange={(e) =>
								changeAnswerText(e, index, currentQuestion)
							}
						/>
						<ModalCheckbox
							text='correct'
							handler={() =>
								changeAnswerStatus(
									index,
									currentQuestion,
									isCorrect
								)
							}
							value={isCorrect}
						/>
						<QuestionConstructorDeleteQuestion
							onClick={() => removeAnswer(currentQuestion, index)}
						/>
					</QuestionaryContentQuestionItem>
				))}
			</QuestionaryContentQuestionStack>
			{currentQuestion.answers.length < MAXCOUNTOFQUESTIONS ? (
				<AddAnswer onClick={() => addNewAnswer(currentQuestion)} />
			) : null}
		</QuestionaryContentQuestion>
	)
}

export default QuestionConstructor
