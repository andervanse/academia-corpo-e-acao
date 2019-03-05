export class AvaliacaoFisica  
{
    id: number;
    usuarioId: number;
    dtAtual?: Date;
    altura: number;
    peso: number;
    medidas?: Medidas;
    observacao: string;
}

export class Medidas
{
    ombro: number;
    peitoral: number;
    braco: number;
    cintura: number;
    quadril: number;
    coxa: number;
}