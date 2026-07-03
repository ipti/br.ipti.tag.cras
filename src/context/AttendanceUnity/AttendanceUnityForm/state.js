import { AttendanceUnityFormController } from '../../../sdk/AttendanceUnity/AttendanceUnityForm/controller';

export const AttendanceUnityFormState = () => {
    const { isEdit, oneAttendance, createMutation, editMutation } =
        AttendanceUnityFormController();

    const handleSubmit = (body) => {
        const payload = {
            ...body,
            unity_number: body.unity_number.toString(),
            telephone: body.telephone ? body.telephone.replace(/\D/g, '') : null,
        };

        if (isEdit) {
            editMutation.mutate(payload);
        } else {
            createMutation.mutate(payload);
        }
    };

    return { isEdit, oneAttendance, handleSubmit };
};
