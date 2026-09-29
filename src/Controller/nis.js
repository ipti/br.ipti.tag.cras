import * as Yup from 'yup';

export const NIS_MASK = "999.99999.99-9";

// Remove a máscara do NIS; retorna undefined quando vazio para não enviar o campo.
export const onlyNisDigits = (value) => {
    if (value === null || value === undefined) return undefined;
    const digits = String(value).replace(/\D/g, '');
    return digits === '' ? undefined : digits;
};

export const nisValidation = Yup.string()
    .nullable()
    .test('nis', 'NIS deve conter 11 dígitos', (value) => {
        const digits = onlyNisDigits(value);
        return digits === undefined || digits.length === 11;
    });
