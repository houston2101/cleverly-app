import React from 'react'
import TestInfoWrapper from '../components/QuestionConstructor/TestInfoWrapper'
import EditTitleIcon from '../components/EditableTitle/EditTitleIcon'
import EditTitleWrapper from '../components/EditableTitle/EditTitleWrapper'
import EditTitle from '../components/EditableTitle/EditTitle'
import TestCover from '../components/QuestionConstructor/TestCover'
import TestCoverImage from '../components/QuestionConstructor/TestCoverImage'
import TestCoverInput from '../components/QuestionConstructor/TestCoverInput'

import uploadcareService from '../service/uploadcareService'

const TestInfo = ({title, setName}) => {
	const [allowEdit, setAllowEdit] = React.useState(false)
	const imageFile = React.useRef()
	const [imageData, setImageData] = React.useState(null)
	const handlerSetValue = (e) => setName(e.target.value)

	const handlerAllowEdit = () => {
		setAllowEdit(!allowEdit)
	}

	const handlerChaneFile = async () => {
		let file = imageFile?.current?.files[0]
		const service = new uploadcareService()
		await service.uploadFile(file)
	}

	React.useEffect(() => {
		const onKeypress = (e) => e.code === 'Enter' && handlerAllowEdit()
		allowEdit
			? document.addEventListener('keypress', onKeypress)
			: document.removeEventListener('keypress', onKeypress)

		return () => {
			document.removeEventListener('keypress', onKeypress)
		}
	}, [allowEdit])

	return (
		<TestInfoWrapper>
			<TestCover>
				<TestCoverInput
					type='file'
					accept='image/png, image/jpeg'
					ref={imageFile}
					onChange={handlerChaneFile}
				/>
				<TestCoverImage />
			</TestCover>
			<EditTitleWrapper onClick={!allowEdit && handlerAllowEdit}>
				{allowEdit ? (
					<EditTitle
						as={'input'}
						autoFocus
						allowEdit={allowEdit}
						value={title}
						onChange={handlerSetValue}
					/>
				) : (
					<EditTitle as={'h1'}>{title}</EditTitle>
				)}

				<EditTitleIcon onClick={handlerAllowEdit} />
			</EditTitleWrapper>
		</TestInfoWrapper>
	)
}

export default TestInfo
