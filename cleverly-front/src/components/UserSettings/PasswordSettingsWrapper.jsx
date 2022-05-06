import styled from '@emotion/styled'
import {css} from '@emotion/react'

const dynamicStyles = ({isOpen}) => css`
	${isOpen ? `max-height: 600px` : `max-height: 0;`}
`

const PasswordSettingsWrapper = styled.div`
	${({theme}) => theme.breakpoints.down('lg')} {
		overflow: hidden;
		transition: 0.5s ease-in-out;
		${dynamicStyles}
	}
`

export default PasswordSettingsWrapper
