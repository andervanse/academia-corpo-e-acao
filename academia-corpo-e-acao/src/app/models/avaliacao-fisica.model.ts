
export class AvaliacaoFisica  
{
    id: number;
    usuarioId: number;
    dtAtualizacao?: Date;
    medidas?: Medidas;
    composicaoCorporal?: ComposicaoCorporal;
    medidasAntropometricas?: MedidasAntropometricas;
    observacao?: string;
}

export class Medidas
{
    peso: number;
    estatura: number;    
    imc?: number;
    igc?: number; // Indice Gordura Corporal   
}

export class ComposicaoCorporal
{
    subescapular: number;
    auxiliarMedia: number;
    suprailiaca: number;
    triceps: number;
    coxa: number;
    panturilha: number;
}

export class MedidasAntropometricas
{
    ombro: number;
    torax: number;
    cintura: number;
    quadril: number;
    antebracoDireito: number;
    antebracoEsquerdo: number;
    bracoDireito: number;
    bracoEsquerdo: number;
    coxaDireita: number;
    coxaEsquerda: number;
    pernaDireita: number;
    pernaEsquerda: number;   
    icq?: number; //Indice Cintura Quadril  
}