import userPageData from '../data/en/userPageData'

const UserPage = () => (
	<div class='userSettingsWrapper'>
		<div class='userInfoWrapper'>
			<div class='avatarWrapper'>
				<img />
			</div>
			<div class='userDataWrapper'>
				<div class='userNameWrapper'>
					<span class='userName'></span>
					<div class='editUserNameIcon'></div>
				</div>
				<span class='email'></span>
			</div>
		</div>

		<div class='passwordSettingsWrapper'>
			<input class='oldPassword'></input>
			<input class='newPassword'></input>
			<input class='repeatPassword'></input>
			<button class='changePasswordButton'></button>
		</div>

		<div class='themeToggle'>
			<img />
		</div>
	</div>
)

export default UserPage
