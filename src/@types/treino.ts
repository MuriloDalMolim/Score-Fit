export type Exercicio = {
    id: string;
    nome: string;
    series: string;
    descanso: string;
    carga: string;
};

export type Treino = {
    id: string;
    nome: string;
    exercicios: Exercicio[];
    };
