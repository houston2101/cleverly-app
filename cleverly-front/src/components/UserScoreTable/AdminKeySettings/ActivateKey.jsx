import styled from '@emotion/styled'
import {ReactComponent as Check} from '../../../img/checkmark.svg'
import {css} from '@emotion/react'

const dynamicStyles = ({active}) => css`
	pointer-events: ${active ? 'all' : 'none'};
	filter: ${active ? 'unset' : 'grayscale(100%)'};
`

const ActivateKey = styled(Check)`
	opacity: 80%;
	${dynamicStyles}

	&:hover {
		opacity: 100%;
	}
`

export default ActivateKey
