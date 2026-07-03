import UserFormProvider from "../../../context/User/UserForm/context";
import UserFormPage from "../../../Page/Users/UserForm";

const UserForm = () => (
    <UserFormProvider>
        <UserFormPage />
    </UserFormProvider>
);

export default UserForm;
