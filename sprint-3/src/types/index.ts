
export type Integrante = {
  id: number;
  nome: string;
  rm: string;
  turma: string;
  github: string;
  linkedin: string;
  foto: string;
};


export type StatusPaciente = "Em atendimento" | "Concluído" | "Aguardando";

export type Programa = "Dentista do Bem" | "Apolônias do Bem";



export type Paciente = {
  id: number;
  nome: string;
  idade: number;
  programa: Programa;
  cidade: string;
  status: StatusPaciente;
};


type DadosPessoais = {
  nome: string;
  email: string;
  telefone: string;
};

type DadosAgendamento = {
  programa: Programa;
  data: string;
  idade: number;
};


export type AgendamentoFormData = DadosPessoais & DadosAgendamento;