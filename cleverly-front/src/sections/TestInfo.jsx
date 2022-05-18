import React from 'react'
import TestInfoWrapper from '../components/QuestionConstructor/TestInfoWrapper'
import EditTitleIcon from '../components/EditableTitle/EditTitleIcon'
import EditTitleWrapper from '../components/EditableTitle/EditTitleWrapper'
import EditTitle from '../components/EditableTitle/EditTitle'
import TestCover from '../components/QuestionConstructor/TestCover'
import TestCoverImage from '../components/QuestionConstructor/TestCoverImage'

const TestInfo = ({title, setName}) => {
	const [allowEdit, setAllowEdit] = React.useState(false)
	const handlerSetValue = (e) => setName(e.target.value)

	const handlerAllowEdit = () => {
		setAllowEdit(!allowEdit)
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
