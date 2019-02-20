import { PlanoTreino } from "./plano-treino.models";

export class Usuario {
    id: number;
    nome: string;
    password?: string;
    objetivo?: string;
    planosTreino?: PlanoTreino[];
    administrador: boolean;
}