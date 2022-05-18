import styled from '@emotion/styled'
import Input from '../Input'

const SettingsInput = styled(Input)`
	width: 100%;
	padding: 5px 5px 5px 10px;
	caret-color: ${({theme}) => theme.palette.primary};

	${({theme}) => theme.breakpoints.down('lg')} {
		max-width: 400px;
	}

	${({theme}) => theme.breakpoints.up('lg')} {
		max-width: 500px;
	}

	&::placeholder {
		padding-left: 0;
	}
`

export default SettingsInput
