import FormFamilyComposition from "../../../Page/FamilyRefered/MembersFamily"
import CompositionFamilyProvider from "../../../context/FamilyRefered/CompositionFamily/context"

const CompositionFamily = () => {
    return(
        <CompositionFamilyProvider>
            <FormFamilyComposition />
        </CompositionFamilyProvider>
    )
}

export default CompositionFamily