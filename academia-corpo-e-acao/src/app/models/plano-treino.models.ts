export class PlanoTreino {
    id: number;    
    usuarioId: number;
    dataInicio: Date;
    descricao: string;
    observacao: string;
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