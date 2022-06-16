import styled from '@emotion/styled'
import {ReactComponent as Cross} from '../../../img/cross.svg'
import {css} from '@emotion/react'

const dynamicStyles = ({active}) => css`
	pointer-events: ${active ? 'all' : 'none'};
	filter: ${active ? 'unset' : 'grayscale(100%)'};
`

const DeactivateKey = styled(Cross)`
	opacity: 80%;
	${dynamicStyles};

	&:hover {
		opacity: 100%;
	}
`

export default DeactivateKey
