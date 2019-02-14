

export class LoginCredentials {
    login: string;
    senha: string;
}

export class Usuario {
    id: number;
    nome: string;
    password?: string;
    objetivo?: string;
    planosTreino?: PlanoTreino[];
    administrador: boolean;
}

export class PlanoTreino {
    id: number;    
    usuarioId: number;
    dataInicio: Date;
    gruposMusculares: GrupoMuscular[]
}

export class GrupoMuscular {
    descricao: string;
    exercicios: Exercicio[];
}

export class Exercicio {
    descricao: string;
    ordem: number;
    repeticao: string;
    observacao?: string;
} 


