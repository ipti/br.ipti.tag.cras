import FamilyForwardingPage from "../../../Page/FamilyForwarding/FamilyForwarding";
import FamilyForwardingProvider from "../../../context/FamilyForwarding/FamilyForwarding/context";

const FamilyForwarding = () => {
    return (
        <FamilyForwardingProvider>
            <FamilyForwardingPage />
        </FamilyForwardingProvider>


    )
}

export default FamilyForwarding;