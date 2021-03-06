import styled from '@emotion/styled'
import {Link} from 'react-router-dom'

const UserPageSliderItem = styled(Link)`
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 10px;

	${({theme}) => theme.breakpoints.down('lg')} {
		width: 100%;
	}

	${({theme}) => theme.breakpoints.up('lg')} {
		max-width: 170px;
	}
`

export default UserPageSliderItem
