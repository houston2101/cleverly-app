import {ReactComponent as SettingsIcon} from '../../img/settings-icon.svg'
import styled from '@emotion/styled'
import {css} from '@emotion/react'

const dynamicStyles = ({isOpen}) => css`
	${isOpen
		? `transform: rotate(-180deg);
		transition: 0.6s;`
		: `transform: rotate(0deg);
		transition: 0.6s;`}
`

const UserSettingsIcon = styled(SettingsIcon)`
	${({theme}) => theme.breakpoints.down('md')} {
		width: 40px;
		height: 40px;
		padding: 10px;
		display: block;
		position: absolute;
		right: -10px;
		top: -10px;
		${dynamicStyles}
	}

	&:hover {
		filter: brightness(0.7);
		cursor: pointer;
	}

	${({theme}) => theme.breakpoints.up('md')} {
		display: none;
	}
`

export default UserSettingsIcon
