import ModalWrapper from './ModalWrapper'
import ModalCloseIcon from './ModalCloseIcon'
import ModalTitle from './ModalTitle'
import ModalInfoWrapper from './ModalInfoWrapper'
import TestCover from '../QuestionConstructor/TestCover'
import TestCoverImage from '../QuestionConstructor/TestCoverImage'
import CategoryTitleWrapper from './CategoryTitleWrapper'
import Button from '../Button/Button'
import ButtonText from '../Button/ButtonText'
import SettingsInput from '../UserSettings/SettingsInput'
import ModalSettingsWrapper from './ModalSettingsWrapper'
import CreateCategoryModal from './CreateCategoryModal'

const CategoryModal = () => {
	return (
		<CreateCategoryModal>
			<ModalCloseIcon />
			<ModalWrapper>
				<ModalSettingsWrapper>
					<ModalTitle>Create new category</ModalTitle>
					<ModalInfoWrapper>
						<TestCover>
							<TestCoverImage />
						</TestCover>
						<CategoryTitleWrapper>
							<SettingsInput placeholder='Category name' />
							<Button>
								<ButtonText>Create category</ButtonText>
							</Button>
						</CategoryTitleWrapper>
					</ModalInfoWrapper>
				</ModalSettingsWrapper>
			</ModalWrapper>
		</CreateCategoryModal>
	)
}

export default CategoryModal
