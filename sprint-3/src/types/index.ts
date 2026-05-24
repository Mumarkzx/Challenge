
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
  idBeneficiario: number;
  nome: string;
  cpf: string;
  telefone: string;
  email: string;
  endereco: string;
  dataNasc: string;
  tratamentoSolicitado: string;
  statusVulnerabilidade: string;
  historia: string;
};

type DadosPessoais = {
  nome: string;
  cpf: string;
  email: string;
  telefone: string;
  endereco: string;
};

type DadosAgendamento = {
  programa: Programa;
  data: string;
  idade: number;
  
};


export type AgendamentoFormData = DadosPessoais & DadosAgendamento;