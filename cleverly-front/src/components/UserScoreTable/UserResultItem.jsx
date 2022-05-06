import styled from '@emotion/styled'

const UserResultItem = styled.div`
	display: grid;

	${({theme}) => theme.breakpoints.down('lg')} {
		grid-template-columns: 35px auto 72px;
		grid-grid-template-rows: 80px;

		&:first-child div {
			padding-top: 14px;
		}

		&:last-child div {
			padding-bottom: 14px;
		}
	}

	${({theme}) => theme.breakpoints.up('lg')} {
		grid-template-columns: 90px auto 100px;
		grid-grid-template-rows: 168px;

		&:first-child div {
			padding-top: 22px;
		}

		&:last-child div {
			padding-bottom: 22px;
		}
	}
`

export default UserResultItem
