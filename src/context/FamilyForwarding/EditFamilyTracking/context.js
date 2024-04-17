import { createContext } from "react";
import { EditTrackingState } from "./state";

export const EditTrackingContext = createContext({});

const EditTrackingProvider = ({ children }) => {

    const { handleEditTracking, status } = EditTrackingState();

    return (
        <EditTrackingContext.Provider value={{ handleEditTracking, status }}>
            {children}
        </EditTrackingContext.Provider>
    )
}

export default EditTrackingProvider;