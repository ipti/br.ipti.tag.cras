export function formatarData(dateUser) {
    const date = new Date(dateUser);
    const dia = String(date.getDate()).padStart(2, '0'); // Obtém o dia e adiciona um zero à esquerda, se necessário
    const mes = String(date.getMonth() + 1).padStart(2, '0'); // Obtém o mês (lembrando que os meses são indexados a partir de 0) e adiciona um zero à esquerda, se necessário
    const ano = date.getFullYear(); // Obtém o ano

    return `${dia}/${mes}/${ano}`;
}