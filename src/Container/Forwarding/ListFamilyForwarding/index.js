import ForwardingPage from "../../../Page/Forwarding/ListFamilyForwarding"
import UserIdentifyProvider from "../../../context/FamilyRefered/FamilyRefered/context";

const Forwarding = () => {
    return (
        <UserIdentifyProvider>
            <ForwardingPage />
        </UserIdentifyProvider>
    )
}

export default Forwarding;