import WarningModalMarker from '../components/WarningModal/WarningModalMarker'
import WarningModalWrapper from '../components/WarningModal/WarningModalWrapper'
import WarningModalText from '../components/WarningModal/WarningModalText'

const WarningModal = ({warningText}) => (
	<WarningModalWrapper>
		<WarningModalMarker />
		<WarningModalText>{warningText}</WarningModalText>
	</WarningModalWrapper>
)

export default WarningModal
