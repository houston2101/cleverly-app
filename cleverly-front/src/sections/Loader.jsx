import styled from '@emotion/styled'

const SpinnerBox = styled.div`
	width: 100px;
	height: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: transparent;

	.pulse-container {
		width: 120px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.pulse-bubble {
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background-color: ${({theme}) => theme.palette.primary};
	}

	.pulse-bubble-1 {
		animation: pulse 0.4s ease 0s infinite alternate;
	}
	.pulse-bubble-2 {
		animation: pulse 0.4s ease 0.2s infinite alternate;
	}
	.pulse-bubble-3 {
		animation: pulse 0.4s ease 0.4s infinite alternate;
	}

	@keyframes pulse {
		from {
			opacity: 1;
			transform: scale(1);
		}
		to {
			opacity: 0.25;
			transform: scale(0.75);
		}
	}
`

const Loader = () => (
	<SpinnerBox>
		<div class='pulse-container'>
			<div class='pulse-bubble pulse-bubble-1'></div>
			<div class='pulse-bubble pulse-bubble-2'></div>
			<div class='pulse-bubble pulse-bubble-3'></div>
		</div>
	</SpinnerBox>
)

export default Loader
