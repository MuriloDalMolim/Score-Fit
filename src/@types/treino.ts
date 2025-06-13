export type Exercicio = {
  id: string;
  nome: string;
  series: string;
  descanso: string;
  carga: string;
  feito: boolean;
};

export type Treino = {
  id: string;
  nome: string;
  exercicios: Exercicio[];
};
