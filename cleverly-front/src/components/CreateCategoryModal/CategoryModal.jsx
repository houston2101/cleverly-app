import React from 'react'
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
import ModalBackground from './ModalBackground'
import TestCoverInput from '../QuestionConstructor/TestCoverInput'

import uploadService from '../../service/uploadcareService'

const CategoryModal = ({handler, buttonHandler}) => {
	const [categoryData, setCategoryData] = React.useState({
		title: '',
		image: null
	})
	const handlerSetTitle = (e) => {
		setCategoryData({...categoryData, title: e.target.value})
	}

	const imageFile = React.useRef()

	const handlerChangeFile = async () => {
		let file = imageFile?.current?.files[0]
		await uploadService
			.uploadFile(file)
			.then((data) => setCategoryData({...categoryData, image: data}))
	}

	return (
		<>
			<ModalBackground />
			<CreateCategoryModal>
				<ModalCloseIcon onClick={handler} />
				<ModalWrapper>
					<ModalSettingsWrapper>
						<ModalTitle>Create new category</ModalTitle>
						<ModalInfoWrapper>
							<TestCover>
								<TestCoverInput
									type='file'
									accept='image/png, image/jpeg'
									ref={imageFile}
									onChange={handlerChangeFile}
								/>
								{categoryData.image ? (
									<img
										src={categoryData.image}
										alt={'Category cover'}
									/>
								) : (
									<TestCoverImage />
								)}
							</TestCover>
							<CategoryTitleWrapper>
								<SettingsInput
									value={categoryData.title}
									onChange={handlerSetTitle}
									placeholder='Category name'
								/>
								<Button
									onClick={() => buttonHandler(categoryData)}>
									<ButtonText>Create category</ButtonText>
								</Button>
							</CategoryTitleWrapper>
						</ModalInfoWrapper>
					</ModalSettingsWrapper>
				</ModalWrapper>
			</CreateCategoryModal>
		</>
	)
}

export default CategoryModal
