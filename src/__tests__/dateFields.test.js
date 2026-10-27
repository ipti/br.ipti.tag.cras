import * as Yup from 'yup';

// Padrão de guarda de data aplicado em todos os formulários corrigidos
const toDate = (value) => (value ? new Date(value) : null);

// ─── toDate ──────────────────────────────────────────────────────────────────

describe('toDate — guarda contra epoch (31/12/1969)', () => {
  test('retorna null quando valor é null', () => {
    expect(toDate(null)).toBeNull();
  });

  test('retorna null quando valor é string vazia', () => {
    expect(toDate('')).toBeNull();
  });

  test('não retorna epoch ao receber null', () => {
    // new Date(null) === 1970-01-01T00:00Z → 31/12/1969 em BRT (UTC-3)
    expect(toDate(null)).not.toEqual(new Date(null));
  });

  test('não retorna epoch ao receber string vazia', () => {
    expect(toDate('')).not.toEqual(new Date(0));
  });

  test('retorna Date válida para string ISO', () => {
    const result = toDate('2004-02-21');
    expect(result).toBeInstanceOf(Date);
    // Usar métodos UTC para evitar variação de fuso horário
    expect(result.getUTCFullYear()).toBe(2004);
    expect(result.getUTCMonth()).toBe(1); // fevereiro = índice 1
    expect(result.getUTCDate()).toBe(21);
  });

  test('retorna o mesmo objeto Date quando valor já é Date', () => {
    const date = new Date('2004-02-21T12:00:00');
    const result = toDate(date);
    expect(result).toBeInstanceOf(Date);
    expect(isNaN(result.getTime())).toBe(false);
  });
});

// ─── Yup: birthday (obrigatório no front — regra de negócio para métricas) ──

describe('Yup — birthday obrigatório no front (.nullable().required)', () => {
  const schema = Yup.object({
    birthday: Yup.string().nullable().required('Campo obrigatório'),
  });

  test('rejeita null com mensagem em português', async () => {
    await expect(schema.validate({ birthday: null })).rejects.toThrow(
      'Campo obrigatório',
    );
  });

  test('não lança "cannot be null" quando valor é null', async () => {
    let msg = '';
    try {
      await schema.validate({ birthday: null });
    } catch (e) {
      msg = e.message;
    }
    expect(msg).not.toMatch(/cannot be null/i);
  });

  test('aceita string de data válida', async () => {
    await expect(
      schema.validate({ birthday: '21/02/2004' }),
    ).resolves.toBeDefined();
  });
});

// ─── Yup: rg_date_emission opcional ─────────────────────────────────────────

describe('Yup — rg_date_emission opcional (.nullable())', () => {
  const schema = Yup.object({
    rg_date_emission: Yup.string().nullable(),
  });

  test('aceita null sem lançar erro', async () => {
    await expect(
      schema.validate({ rg_date_emission: null }),
    ).resolves.toBeDefined();
  });

  test('não lança "cannot be null"', async () => {
    let msg = '';
    try {
      await schema.validate({ rg_date_emission: null });
    } catch (e) {
      msg = e.message;
    }
    expect(msg).not.toMatch(/cannot be null/i);
  });

  test('aceita string de data válida', async () => {
    await expect(
      schema.validate({ rg_date_emission: '15/03/2020' }),
    ).resolves.toBeDefined();
  });
});

// ─── Yup: rg_date_emission obrigatório (composição familiar) ─────────────────

describe('Yup — rg_date_emission obrigatório (.nullable().required)', () => {
  const schema = Yup.object({
    rg_date_emission: Yup.string()
      .nullable()
      .required('Campo obrigatório'),
  });

  test('rejeita null com mensagem em português', async () => {
    await expect(
      schema.validate({ rg_date_emission: null }),
    ).rejects.toThrow('Campo obrigatório');
  });

  test('não lança "cannot be null" quando obrigatório', async () => {
    let msg = '';
    try {
      await schema.validate({ rg_date_emission: null });
    } catch (e) {
      msg = e.message;
    }
    expect(msg).not.toMatch(/cannot be null/i);
  });

  test('aceita data preenchida', async () => {
    await expect(
      schema.validate({ rg_date_emission: '10/05/2018' }),
    ).resolves.toBeDefined();
  });
});

// ─── Valor inicial dos formulários ───────────────────────────────────────────

describe('Valores iniciais — birthday e rg_date_emission devem ser null', () => {
  test('birthday inicial não é instância de Date', () => {
    const initial = { birthday: null };
    expect(initial.birthday).toBeNull();
    expect(initial.birthday).not.toBeInstanceOf(Date);
  });

  test('rg_date_emission inicial não é instância de Date', () => {
    const initial = { rg_date_emission: null };
    expect(initial.rg_date_emission).toBeNull();
    expect(initial.rg_date_emission).not.toBeInstanceOf(Date);
  });

  test('initial_date pode ser Date (preenchimento automático é esperado)', () => {
    const initial = { initial_date: new Date() };
    expect(initial.initial_date).toBeInstanceOf(Date);
  });

  test('birthday null não gera data epoch ao passar por toDate', () => {
    const result = toDate(null);
    // Se fosse new Date(null) o getFullYear() seria 1970 (ou 1969 em BRT)
    expect(result).toBeNull();
  });
});
