import React from 'react'
import TestInfoWrapper from '../components/QuestionConstructor/TestInfoWrapper'
import EditTitleIcon from '../components/EditableTitle/EditTitleIcon'
import EditTitleWrapper from '../components/EditableTitle/EditTitleWrapper'
import EditTitle from '../components/EditableTitle/EditTitle'
import TestCover from '../components/QuestionConstructor/TestCover'
import TestCoverImage from '../components/QuestionConstructor/TestCoverImage'
import TestCoverInput from '../components/QuestionConstructor/TestCoverInput'

import uploadService from '../service/uploadcareService'

const TestInfo = ({title, imageData, setName, setImage}) => {
	const [allowEdit, setAllowEdit] = React.useState(false)
	const imageFile = React.useRef()
	const handlerSetValue = (e) => setName(e.target.value)

	const handlerAllowEdit = () => {
		setAllowEdit(!allowEdit)
	}

	const handlerChangeFile = async () => {
		let file = imageFile?.current?.files[0]
		await uploadService.uploadFile(file).then((data) => setImage(data))
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
					onChange={handlerChangeFile}
				/>
				{imageData ? (
					<img src={imageData} alt={'Test cover'} />
				) : (
					<TestCoverImage />
				)}
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
