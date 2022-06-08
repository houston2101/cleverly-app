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

const UserSettings = ({name, email}) => {
	const [isOpen, setIsOpen] = React.useState(false)
	const handleSetIsOpen = () => setIsOpen(!isOpen)

	const [isLight, setIsLight] = React.useState(true)
	const handleSetIsLight = () => setIsLight(!isLight)

	return (
		<UserSettingsWrapper>
			<UserInfoWrapper>
				<UserSettingsIcon onClick={handleSetIsOpen} isOpen={isOpen} />
				<UserAvatar />
				<UserDataWrapper>
					<EditTitleWrapper>
						<EditTitle>{name}</EditTitle>
						<EditTitleIcon />
					</EditTitleWrapper>
					<UserEmail>{email}</UserEmail>
				</UserDataWrapper>
			</UserInfoWrapper>

			<PasswordSettingsWrapper isOpen={isOpen}>
				<PasswordSettingsContent>
					<SettingsInputWrapper>
						<SettingsInput placeholder='Old password' />
						<SettingsInput placeholder='New password' />
						<SettingsInput placeholder='Repeat new password' />
					</SettingsInputWrapper>
					<Button>
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
