import styled from '@emotion/styled'

const UserResultOrder = styled.div`
	grid-column: 2;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	overflow: hidden;

	${({isButton}) =>
		isButton
			? `justify-content: center;
		align-items: center;
		padding: 5px 10px;
		cursor: pointer;
		&:hover
		{
			text-decoration: underline
		}`
			: ''}
`

export default UserResultOrder
