export const RG_MASK = "99.999.999-#";

// O dígito verificador do RG pode ser um número ou "X"
export const RG_MASK_OPTIONS = {
    definitions: {
        '#': { validator: '[0-9Xx]', casing: 'upper' },
    },
};

// Remove a máscara do RG mantendo o "X" do dígito verificador.
export const onlyRgChars = (value) => String(value ?? '').toUpperCase().replace(/[^0-9X]/g, '');
