

export class LoginCredentials {
    login: string;
    senha: string;
}

export class Usuario {
    id: string;
    nome: string;
    password?: string;
    objetivo?: string;
    planosTreino?: PlanoTreino[];
}

export class PlanoTreino {
    id: string;    
    dataInicio: Date;
    gruposMusculares: GrupoMuscular[]
}

export class GrupoMuscular {
    descricao: string;
    items: TreinoItem[];
}

export class TreinoItem {
    exercicio: string;
    ordem: number;
    repeticoes: string;
    grupoMuscular: string;
    observacao?: string;
} 


