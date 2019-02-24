import { PlanoTreino } from "./plano-treino.models";

export class Usuario {
    id: number;
    nome: string;
    password?: string;
    objetivo?: string;
    email?: string;
    celular?: string;
    peso?: number;
    altura?: number;
    observacao?: string;
    planosTreino?: PlanoTreino[];
    administrador?: boolean;
    login?: string;
    senha?: string;
    confirmaSenha?: string;
}

