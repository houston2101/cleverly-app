import {ReactComponent as EditIcon} from '../../img/edit-icon.svg'
import styled from '@emotion/styled'

const EditUserNameIcon = styled(EditIcon)`
	&:hover {
		filter: brightness(0.7);
		cursor: pointer;
	}

	${({theme}) => theme.breakpoints.down('md')} {
		width: 25px;
		height: 25px;
		padding: 5px;
	}

	${({theme}) => theme.breakpoints.up('md')} {
		width: 32px;
		height: 32px;
		padding: 5px;
	}
`

export default EditUserNameIcon
