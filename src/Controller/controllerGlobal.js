
export const Status = {
    NAO_SE_APLICA:"NÃO SE APLICA",
    PENDENTE:"PENDENTE",
    DEFERIDO:"DEFERIDO",
    INDEFERIDO:"INDEFERIDO",
}

export const FowardingType = {
    INCLUSAO:"Inclusão",
    ENCAMINHAMENTO:"Encaminhamento",
    ATUALIZACAO:"Atualização",
    ACESSO:"Acesso",
    ACOMPANHAMENTO:"Acompanhamento",
    SEGUNDA_VIA_NASCIMENTO:"Segunda Via - Nascimento",
    SEGUNDA_VIA_CASAMENTO:"Segunda Via - Casamento",
    SEGUNDA_VIA_OBITO:"Segunda Via - Óbito",
    getTitle: (type) => FowardingType[type]
}

export const Kinship = {
    RESPONSAVEL:"Responsável",
    CONJUGE:"Cônjuge",
    FILHO_A:"Filho(a)",
    ENTEADO_A:"Enteado(a)",
    NETO_A:"Neto(a)",
    PAI:"Pai",
    MAE:"Mãe",
    SOGRO_A:"Sogro(a)",
    IRMAO_A:"Irmão(a)",
    GENRO:"Genro",
    NORA:"Nora",
    OUTRO:"Outro",
    NAO_PARENTE:"Não Parente",
    getTitle: (kinship) => Kinship[kinship]
}
 