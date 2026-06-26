import * as Yup from 'yup';
import { UserFormController } from '../../../sdk/User/UserForm/controller';

export const ROLE_OPTIONS = [
    { id: "ADMIN", name: "Administrador" },
    { id: "SECRETARY", name: "Secretário" },
    { id: "TECHNICIAN", name: "Técnico" },
];

export const UserFormState = () => {
    const { isEdit, user, createMutation, editMutation } = UserFormController();

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Campo obrigatório"),
        email: Yup.string().required("Campo obrigatório"),
        username: Yup.string().required("Campo obrigatório"),
        role: Yup.object().required("Campo obrigatório"),
        password: isEdit
            ? Yup.string()
            : Yup.string().required("Campo obrigatório"),
        confirmPassword: Yup.string()
            .label("Confirmar senha")
            .oneOf([Yup.ref("password")], "Senhas diferentes")
            .when("password", {
                is: (val) => val && val.length > 0,
                then: (schema) => schema.required("Confirme a senha"),
            }),
    });

    const handleSubmit = (body) => {
        const payload = {
            name: body.name,
            email: body.email,
            username: body.username,
            role: body.role.id,
            attendance_unity_ids: body.attendance_unity_ids ?? [],
            ...(body.password ? { password: body.password } : {}),
        };

        if (isEdit) {
            editMutation.mutate(payload);
        } else {
            createMutation.mutate(payload);
        }
    };

    return { isEdit, user, validationSchema, handleSubmit };
};
