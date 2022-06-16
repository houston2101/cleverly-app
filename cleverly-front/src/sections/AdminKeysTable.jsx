import React from 'react'
import UserResultOrder from '../components/UserScoreTable/UserResultOrder'
import UserScoreTableWrapper from '../components/UserScoreTable/UserScoreTableWrapper'
import UserResultOrderNumber from '../components/UserScoreTable/UserResultOrderNumber'
import UserResultTests from '../components/UserScoreTable/UserResultTests'
import UserResultTestName from '../components/UserScoreTable/UserResultTestName'
import UserResultTime from '../components/UserScoreTable/UserResultTime'
import UserResultTimeValue from '../components/UserScoreTable/UserResultTimeValue'
import UserResultItem from '../components/UserScoreTable/UserResultItem'
import AdminKeySettings from '../components/UserScoreTable/AdminKeySettings'
import useAccessKeys from '../hooks/access-keys.hook'
import ActivateKey from '../components/UserScoreTable/AdminKeySettings/ActivateKey'
import DeactivateKey from '../components/UserScoreTable/AdminKeySettings/DeactivateKey'
import DeleteKey from '../components/UserScoreTable/AdminKeySettings/DeleteKey'

const AdminKeysTable = () => {
	const {accessKeys, addKey, changeKey, removeKey} = useAccessKeys()
	return (
		<UserScoreTableWrapper>
			<UserResultItem>
				<UserResultOrder />
				<UserResultTests />
				<UserResultTime />
			</UserResultItem>

			{accessKeys &&
				accessKeys?.map(({_id, accessKey, active}, index) => (
					<UserResultItem key={index}>
						<UserResultOrder>
							<UserResultOrderNumber>
								{index + 1}
							</UserResultOrderNumber>
						</UserResultOrder>
						<UserResultTests>
							<UserResultTestName>
								{accessKey}
								<AdminKeySettings>
									<ActivateKey
										onClick={() => changeKey(_id, active)}
										active={!active}
									/>
									<DeactivateKey
										onClick={() => changeKey(_id, active)}
										active={active}
									/>
									<DeleteKey onClick={() => removeKey(_id)} />
								</AdminKeySettings>
							</UserResultTestName>
						</UserResultTests>
						<UserResultTime>
							<UserResultTimeValue>
								{active ? 'active' : 'inactive'}
							</UserResultTimeValue>
						</UserResultTime>
					</UserResultItem>
				))}

			<UserResultItem onClick={addKey}>
				<UserResultOrder />
				<UserResultTests isButton={true}>Add new key</UserResultTests>
				<UserResultTime />
			</UserResultItem>
		</UserScoreTableWrapper>
	)
}

export default AdminKeysTable
