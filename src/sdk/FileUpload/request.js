import http from "../../services/axios";
import { getToken } from "../../services/localstorage";

const authConfig = () => ({
    headers: { Authorization: `Bearer ${getToken()}` },
});

export const UploadFileRequest = async (file, folder = 'logos') => {
    const formData = new FormData();
    formData.append('file', file);

    return http
        .post('/bff/file-upload', formData, {
            headers: {
                Authorization: `Bearer ${getToken()}`,
                'Content-Type': 'multipart/form-data',
            },
        })
        .then((response) => response.data);
};

export const DeleteFileRequest = async (id) => {
    return http
        .delete(`/bff/file-upload/${id}`, authConfig())
        .then((response) => response.data);
};

export const GetFileRequest = async (id) => {
    return http
        .get(`/bff/file-upload/${id}`, authConfig())
        .then((response) => response.data);
};
