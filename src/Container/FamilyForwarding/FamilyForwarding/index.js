import FamilyForwardingPage from "../../../Page/FamilyForwarding/FamilyForwarding";
import EditForwardingProvider from "../../../context/FamilyForwarding/EditFamilyForwarding/context";
import FamilyForwardingProvider from "../../../context/FamilyForwarding/FamilyForwarding/context";

const FamilyForwarding = () => {
    return (
        <FamilyForwardingProvider>
            <EditForwardingProvider>
                <FamilyForwardingPage />
            </EditForwardingProvider>
        </FamilyForwardingProvider>
    )
}

export default FamilyForwarding;