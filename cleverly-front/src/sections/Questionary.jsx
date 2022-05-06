import Button from '../components/Button/Button'
import ButtonText from '../components/Button/ButtonText'
import QuestionaryWrapper from '../components/Questionary/QuestionaryWrapper'

const Questionary = () => {
	return (
		<QuestionaryWrapper>
			<QuestionaryContent>
				<QuestionaryContentQuestion>
					<QuestionaryContentQuestionText>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Id id pellentesque maecenas commodo dui porta enim,
						mattis hac. Varius ultrices dictum eget amet morbi
						rhoncus facilisi eu.
					</QuestionaryContentQuestionText>
					<QuestionaryContentQuestionStack>
						<QuestionaryContentQuestionMark>
							select few answers
						</QuestionaryContentQuestionMark>
						<QuestionaryContentQuestionItem>
							<QuestionaryContentQuestionItemIndex>
								A
							</QuestionaryContentQuestionItemIndex>
							<QuestionaryContentQuestionItemText>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Sagittis nunc, est commodo
								etiam ullamcorper netus ut. Lorem ipsum sit
								amet.
							</QuestionaryContentQuestionItemText>
						</QuestionaryContentQuestionItem>
						<div>
							<div>B</div>
							<div>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Sagittis nunc, est commodo
								etiam ullamcorper netus ut. Lorem ipsum sit
								amet.
							</div>
						</div>
						<div>
							<div>C</div>
							<div>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Sagittis nunc, est commodo
								etiam ullamcorper netus ut. Lorem ipsum sit
								amet.
							</div>
						</div>
						<div>
							<div>D</div>
							<div>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Sagittis nunc, est commodo
								etiam ullamcorper netus ut. Lorem ipsum sit
								amet.
							</div>
						</div>
					</QuestionaryContentQuestionStack>
					<div>
						<Button>
							<ButtonText>Previous question</ButtonText>
						</Button>
						<Button>
							<ButtonText>Next question</ButtonText>
						</Button>
					</div>
				</QuestionaryContentQuestion>
			</QuestionaryContent>
			<QuestionaryAside>
				<QuestionaryModal>
					<QuestionaryModalButton>=</QuestionaryModalButton>
					<QuestionaryModalContent>
						<QuestionaryModalTitle>
							Text Title
						</QuestionaryModalTitle>
						<QuestionaryModalWrapper>
							<QuestionaryModalInfo>
								<QuestionaryModalText>
									Question: 1/18
								</QuestionaryModalText>
								<QuestionaryModalText>
									Time: 1h 40m
								</QuestionaryModalText>
							</QuestionaryModalInfo>
							<QuestionaryModalStack>
								<QuestionaryModalItem>1</QuestionaryModalItem>
								<QuestionaryModalItem>2</QuestionaryModalItem>
								<QuestionaryModalItem>3</QuestionaryModalItem>
								<QuestionaryModalItem>4</QuestionaryModalItem>
								<QuestionaryModalItem>5</QuestionaryModalItem>
								<QuestionaryModalItem>6</QuestionaryModalItem>
								<QuestionaryModalItem>7</QuestionaryModalItem>
								<QuestionaryModalItem>8</QuestionaryModalItem>
								<QuestionaryModalItem>9</QuestionaryModalItem>
								<QuestionaryModalItem>10</QuestionaryModalItem>
								<QuestionaryModalItem>11</QuestionaryModalItem>
								<QuestionaryModalItem>12</QuestionaryModalItem>
								<QuestionaryModalItem>13</QuestionaryModalItem>
								<QuestionaryModalItem>14</QuestionaryModalItem>
								<QuestionaryModalItem>15</QuestionaryModalItem>
								<QuestionaryModalItem>16</QuestionaryModalItem>
								<QuestionaryModalItem>17</QuestionaryModalItem>
								<QuestionaryModalItem>18</QuestionaryModalItem>
							</QuestionaryModalStack>
						</QuestionaryModalWrapper>
					</QuestionaryModalContent>
				</QuestionaryModal>
				<Button>
					<ButtonText>Finish and send results</ButtonText>
				</Button>
			</QuestionaryAside>
		</QuestionaryWrapper>
	)
}

export default Questionary
