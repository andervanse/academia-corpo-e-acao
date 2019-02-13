

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
    administrador: boolean;
}

export class PlanoTreino {
    id: string;    
    dataInicio: Date;
    gruposMusculares: GrupoMuscular[]
}

export class GrupoMuscular {
    id: number;
    usuarioId: number;
    descricao: string;
    exercicios: Exercicio[];
}

export class Exercicio {
    descricao: string;
    ordem: number;
    repeticoes: string;
    observacao?: string;
} 


