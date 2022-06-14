import React from 'react'
import UserSettingsWrapper from '../components/UserSettings/UserSettingsWrapper'
import UserInfoWrapper from '../components/UserSettings/UserInfoWrapper'
import UserAvatar from '../components/UserSettings/UserAvatar'
import UserDataWrapper from '../components/UserSettings/UserDataWrapper'
import UserEmail from '../components/UserSettings/UserEmail'
import PasswordSettingsWrapper from '../components/UserSettings/PasswordSettingsWrapper'
import SettingsInput from '../components/UserSettings/SettingsInput'
import Button from '../components/Button/Button'
import ButtonText from '../components/Button/ButtonText'
import userSettingsData from '../data/en/userSettingsData'
import UserSettingsIcon from '../components/UserSettings/UserSettingsIcon'
import PasswordSettingsContent from '../components/UserSettings/PasswordSettingsContent'
import ThemeToggler from '../components/Icons/ThemeToggler'
import SettingsInputWrapper from '../components/UserSettings/SettingsInputWrapper'
import EditTitleIcon from '../components/EditableTitle/EditTitleIcon'
import EditTitleWrapper from '../components/EditableTitle/EditTitleWrapper'
import EditTitle from '../components/EditableTitle/EditTitle'
import TestCoverImage from '../components/QuestionConstructor/TestCoverImage'
import TestCoverInput from '../components/QuestionConstructor/TestCoverInput'
import uploadService from '../service/uploadcareService'
import {UserContext} from '../context/UserContext'
import {AuthContext} from '../context/AuthContext'

const UserSettings = ({name, email, imageSrc}) => {
	const [isOpen, setIsOpen] = React.useState(false)
	const handleSetIsOpen = () => setIsOpen(!isOpen)

	const [isLight, setIsLight] = React.useState(true)
	const handleSetIsLight = () => setIsLight(!isLight)

	const [username, setName] = React.useState(name)
	const [image, setImage] = React.useState(null)
	const [allowEdit, setAllowEdit] = React.useState(false)

	React.useEffect(() => {
		const onKeypress = (e) => e.code === 'Enter' && handlerAllowEdit()
		allowEdit
			? document.addEventListener('keypress', onKeypress)
			: document.removeEventListener('keypress', onKeypress)

		return () => {
			document.removeEventListener('keypress', onKeypress)
		}
	}, [allowEdit])

	const imageFile = React.useRef()

	const handlerSetValue = (e) => setName(e.target.value)

	const handlerAllowEdit = () => {
		setAllowEdit(!allowEdit)
	}

	React.useEffect(() => {
		setName(name)
		setImage(imageSrc)
	}, [name, imageSrc])

	const handlerChangeFile = async () => {
		let file = imageFile?.current?.files[0]
		await uploadService.uploadFile(file).then((data) => setImage(data))
	}
	const [userPassData, setUserPassData] = React.useState({
		oldPass: null,
		newPass: null,
		repeatedPass: null
	})

	const handlerSetPassValue = (e) =>
		setUserPassData({...userPassData, [e.target.name]: e.target.value})

	const {changePassword, changeName, changeImage} =
		React.useContext(UserContext)
	const {userId} = React.useContext(AuthContext)

	React.useEffect(() => {
		if (image && image !== imageSrc) {
			changeImage(userId, image)
		}
	}, [image])

	React.useEffect(() => {
		if (!allowEdit && name !== username) changeName(userId, username)
	}, [allowEdit])

	const handlerSaveNewPassword = async () => {
		if (
			userPassData.oldPass !== userPassData.newPass &&
			userPassData.newPass === userPassData.repeatedPass &&
			userPassData.newPass.length >= 6
		) {
			changePassword(userId, userPassData.oldPass, userPassData.newPass)
		} else {
			console.log(
				'oldPass: ',
				userPassData.oldPass,
				' newPass: ',
				userPassData.newPass,
				' repeatedPass: ',
				userPassData.repeatedPass
			)
			console.log('error')
		}
	}

	return (
		<UserSettingsWrapper>
			<UserInfoWrapper>
				<UserSettingsIcon onClick={handleSetIsOpen} isOpen={isOpen} />
				<UserAvatar>
					<TestCoverInput
						type='file'
						accept='image/png, image/jpeg'
						ref={imageFile}
						onChange={handlerChangeFile}
					/>
					{image ? (
						<img src={image} alt={'Test cover'} />
					) : (
						<TestCoverImage />
					)}
				</UserAvatar>

				<UserDataWrapper>
					<EditTitleWrapper onClick={!allowEdit && handlerAllowEdit}>
						{allowEdit ? (
							<EditTitle
								as={'input'}
								autoFocus
								allowEdit={allowEdit}
								value={username}
								onChange={handlerSetValue}
							/>
						) : (
							<EditTitle as={'h1'}>{username}</EditTitle>
						)}
						<EditTitleIcon onClick={handlerAllowEdit} />
					</EditTitleWrapper>
					<UserEmail>{email}</UserEmail>
				</UserDataWrapper>
			</UserInfoWrapper>

			<PasswordSettingsWrapper isOpen={isOpen}>
				<PasswordSettingsContent>
					<SettingsInputWrapper>
						<SettingsInput
							value={userPassData.oldPass}
							name='oldPass'
							onChange={handlerSetPassValue}
							type='password'
							placeholder='Old password'
						/>
						<SettingsInput
							value={userPassData.newPass}
							name='newPass'
							onChange={handlerSetPassValue}
							type='password'
							placeholder='New password'
						/>
						<SettingsInput
							value={userPassData.repeatedPass}
							name='repeatedPass'
							onChange={handlerSetPassValue}
							type='password'
							placeholder='Repeat new password'
						/>
					</SettingsInputWrapper>
					<Button onClick={handlerSaveNewPassword}>
						<ButtonText>
							{userSettingsData.changePasswordButton}
						</ButtonText>
					</Button>
				</PasswordSettingsContent>
				<ThemeToggler isLight={isLight} handle={handleSetIsLight} />
			</PasswordSettingsWrapper>
		</UserSettingsWrapper>
	)
}

export default UserSettings
