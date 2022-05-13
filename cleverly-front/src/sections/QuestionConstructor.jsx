import QuestionaryWrapper from '../components/Questionary/QuestionaryWrapper'
import QuestionaryContent from '../components/Questionary/QuestionaryContent'
import QuestionaryContentQuestion from '../components/Questionary/QuestionaryContentQuestion'
import QuestionaryContentQuestionStack from '../components/Questionary/QuestionaryContentQuestionStack'
import QuestionaryContentQuestionMark from '../components/Questionary/QuestionaryContentQuestionMark'
import QuestionaryContentQuestionItem from '../components/Questionary/QuestionaryContentQuestionItem'
import QuestionaryContentQuestionItemIndex from '../components/Questionary/QuestionaryContentQuestionItemIndex'
import QuestionText from '../components/QuestionConstructor/QuestionText'
import QuestionTextWrapper from '../components/QuestionConstructor/QuestionTextWrapper'
import QuestionaryContentQuestionItemText from '../components/Questionary/QuestionaryContentQuestionItemText'
import QuestionTextEditIcon from '../components/QuestionConstructor/QuestionTextEditIcon'
import TextEditIcon from '../components/QuestionConstructor/TextEditIcon'
import AddAnswer from '../components/Icons/AddAnswer'

const QuestionConstructor = () => {
	return (
		<QuestionaryWrapper>
			<QuestionaryContent>
				<QuestionaryContentQuestion>
					<QuestionTextWrapper>
						<QuestionText placeholder='Write your question here'></QuestionText>
						<QuestionTextEditIcon>
							<TextEditIcon />
						</QuestionTextEditIcon>
					</QuestionTextWrapper>
					<QuestionaryContentQuestionStack>
						<QuestionaryContentQuestionMark></QuestionaryContentQuestionMark>
						<QuestionaryContentQuestionItem>
							<QuestionaryContentQuestionItemIndex>
								A
							</QuestionaryContentQuestionItemIndex>
							<QuestionaryContentQuestionItemText>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Mauris dictum elit quis augue
								fermentum egestas. Phasellus at consectetur
								metus.
							</QuestionaryContentQuestionItemText>
						</QuestionaryContentQuestionItem>

						<QuestionaryContentQuestionItem>
							<QuestionaryContentQuestionItemIndex>
								B
							</QuestionaryContentQuestionItemIndex>
							<QuestionaryContentQuestionItemText>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Mauris dictum elit quis augue
								fermentum egestas. Phasellus at consectetur
								metus.
							</QuestionaryContentQuestionItemText>
						</QuestionaryContentQuestionItem>

						<QuestionaryContentQuestionItem>
							<QuestionaryContentQuestionItemIndex>
								C
							</QuestionaryContentQuestionItemIndex>
							<QuestionaryContentQuestionItemText>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Mauris dictum elit quis augue
								fermentum egestas. Phasellus at consectetur
								metus.
							</QuestionaryContentQuestionItemText>
						</QuestionaryContentQuestionItem>

						<QuestionaryContentQuestionItem>
							<QuestionaryContentQuestionItemIndex>
								D
							</QuestionaryContentQuestionItemIndex>
							<QuestionaryContentQuestionItemText>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Mauris dictum elit quis augue
								fermentum egestas. Phasellus at consectetur
								metus.
							</QuestionaryContentQuestionItemText>
						</QuestionaryContentQuestionItem>
					</QuestionaryContentQuestionStack>
					<AddAnswer />
				</QuestionaryContentQuestion>
			</QuestionaryContent>
		</QuestionaryWrapper>
	)
}

export default QuestionConstructor
